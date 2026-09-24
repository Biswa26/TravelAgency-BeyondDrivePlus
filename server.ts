import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK on server side with mandatory telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// In-Memory Database representing SQL Server schema
interface BookingRecord {
  id: string;
  bookingRef: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  bookingType: 'Car' | 'Tour';
  itemId: string;
  itemName: string;
  pickupLocation: string;
  startDate: string;
  endDate: string;
  totalAmount: number;
  securityDeposit: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

const bookingsDb: BookingRecord[] = [
  {
    id: '1',
    bookingRef: 'BD-847291',
    fullName: 'Rahul Senapati',
    phoneNumber: '+91 9861012345',
    email: 'rahul.s@example.com',
    bookingType: 'Car',
    itemId: 'hyundai-creta',
    itemName: 'Hyundai Creta Diesel AT',
    pickupLocation: 'Bhubaneswar Airport (BBI)',
    startDate: '2026-09-28',
    endDate: '2026-10-05',
    totalAmount: 14999,
    securityDeposit: 5000,
    status: 'Confirmed',
    createdAt: new Date().toISOString(),
  },
];

// System instruction for the Gemini Chatbot
const TOUR_ASSISTANT_SYSTEM_INSTRUCTION = `
You are the official AI Tour & Rental Concierge for "Beyond Drive+" (Dream It. Drive It. — Your Journey • Our Priority), Odisha's top-rated self-drive car rental and weekly tour packages agency based in Bhubaneswar.

Your Core Knowledge & Roles:
1. Self-Drive Car Rental Fleet:
   - Hatchbacks: Maruti Swift / Tiago (₹1,299/day, Weekly ₹7,499)
   - Sedans: Maruti Dzire / Honda Amaze (₹1,599/day, Weekly ₹9,499)
   - Compact SUVs: Hyundai Creta AT (₹2,499/day, Weekly ₹14,999) & Brezza/Nexon (₹1,899/day, Weekly ₹11,499)
   - 7-Seaters: Maruti Ertiga Hybrid (₹2,399/day, Weekly ₹14,499) & Toyota Innova Crysta (₹3,499/day, Weekly ₹21,999)
   - 4x4 Off-Road / Premium: Mahindra Thar 4x4 (₹3,199/day, Weekly ₹18,999) & Jeep Compass (₹3,899/day, Weekly ₹23,999)
   - Free KM: 250 - 300 KM/day (Unlimited on 7-Day Weekly Packages)
   - Fast 2-minute KYC: Original Driving License (min 1 year) + Aadhaar / Passport.
   - Refundable Deposit: ₹3,000 to ₹8,000 returned via UPI within 2 to 24 hours.
   - 24/7 Doorstep Delivery: Biju Patnaik International Airport (BBI), Bhubaneswar Railway Station, Sundarapada Head Office, Puri, Cuttack.

2. Weekly Odisha Tour Packages (7 Days / 6 Nights) - "Explore More. Spend Less":
   - Package 1: Odisha Golden Triangle & Chilika Lagoon (Bhubaneswar, Konark Sun Temple, Chandrabhaga Beach, Puri Jagannath Temple, Satapada Irrawaddy Dolphins, Raghurajpur Crafts Village)
   - Package 2: Kashmir of Odisha - Daringbadi & Hill Stations (Gopalpur-on-Sea, scenic Kalinga Ghat, Daringbadi pine forests & coffee gardens, Midubanda Falls, Mandasaru Gorge)
   - Package 3: Koraput Mystique & Deomali Summit 1672m (Rayagada, Koraput Sabara Srikhetra, Deomali highest peak in Odisha, Duduma 175m Falls, Gupteswar Cave)
   - Package 4: Wild Odisha - Similipal Tiger Reserve & Bhitarkanika (Saltwater crocodile boat safari, Chandipur vanishing sea, Barehipani 399m waterfall)

3. Company Contact Details (share these when user wants to book or talk to an executive):
   - Phone / WhatsApp: +91 8978006427
   - Email: beyonddriveplus@gmail.com
   - Head Office: 235/1, Royal Villa B, Vaishnomata Vihar Phase I, Sundarapada, Bhubaneswar 751002, Odisha.

Tone & Style:
- Warm, enthusiastic, knowledgeable, and culturally proud of Odisha's heritage, cuisine (Chhena Poda, Dalma, Jagannath Mahaprasad), and hidden scenic gems.
- Offer actionable advice: best times to visit, which car suits which terrain (e.g. Thar/Creta for Daringbadi & Deomali, Swift/Dzire for Puri-Konark Marine drive).
- Keep responses well-formatted with bullet points and clear recommendations.
`;

// Multi-turn Gemini Chat Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    // Convert client message history to Gemini API contents format
    const contents = messages.map((m: { role: 'user' | 'assistant'; text: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    // Call gemini-3.5-flash for general multi-turn conversational tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contents,
      config: {
        systemInstruction: TOUR_ASSISTANT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I'm ready to help you plan your journey across Odisha!";

    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error generating chat response:', error);
    return res.status(500).json({ 
      error: 'Failed to generate response', 
      details: error.message || 'Unknown server error' 
    });
  }
});

// SQL-style Bookings API
app.get('/api/bookings', (req: Request, res: Response) => {
  res.json({ success: true, count: bookingsDb.length, data: bookingsDb });
});

app.post('/api/bookings', (req: Request, res: Response) => {
  const {
    fullName,
    phoneNumber,
    email,
    bookingType,
    itemId,
    itemName,
    pickupLocation,
    startDate,
    endDate,
    totalAmount,
    securityDeposit,
  } = req.body;

  if (!fullName || !phoneNumber) {
    return res.status(400).json({ error: 'fullName and phoneNumber are required' });
  }

  const newBooking: BookingRecord = {
    id: String(bookingsDb.length + 1),
    bookingRef: 'BD-' + Math.floor(100000 + Math.random() * 900000),
    fullName,
    phoneNumber,
    email: email || '',
    bookingType: bookingType || 'Car',
    itemId: itemId || '',
    itemName: itemName || 'Self Drive Rental',
    pickupLocation: pickupLocation || 'Bhubaneswar Airport (BBI)',
    startDate: startDate || new Date().toISOString().split('T')[0],
    endDate: endDate || new Date().toISOString().split('T')[0],
    totalAmount: Number(totalAmount) || 0,
    securityDeposit: Number(securityDeposit) || 3000,
    status: 'Pending',
    createdAt: new Date().toISOString(),
  };

  bookingsDb.unshift(newBooking);

  res.status(201).json({
    success: true,
    message: 'Booking created successfully in database',
    data: newBooking,
  });
});

// Database & Architecture Export for .NET Core + SQL Server + Angular
app.get('/api/dotnet-sql-schema', (req: Request, res: Response) => {
  const sqlScript = `
-- ==============================================================
-- BEYOND DRIVE+ ODISHA TOUR & TRAVEL
-- Microsoft SQL Server 2022 Database Schema & DDL
-- ==============================================================

CREATE DATABASE BeyondDriveDb;
GO
USE BeyondDriveDb;
GO

-- 1. Table: VehicleCategories
CREATE TABLE VehicleCategories (
    CategoryId INT IDENTITY(1,1) PRIMARY KEY,
    CategoryName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500) NULL,
    CreatedAt DATETIME2 DEFAULT GETUTCDATE()
);

-- 2. Table: Vehicles (Self-Drive Fleet)
CREATE TABLE Vehicles (
    VehicleId INT IDENTITY(1,1) PRIMARY KEY,
    ModelName NVARCHAR(150) NOT NULL,
    CategoryId INT NOT NULL FOREIGN KEY REFERENCES VehicleCategories(CategoryId),
    Transmission NVARCHAR(50) NOT NULL, -- Manual / Automatic
    FuelType NVARCHAR(50) NOT NULL,     -- Petrol / Diesel / EV
    SeatCount INT NOT NULL,
    LuggageCapacity NVARCHAR(100) NOT NULL,
    DailyRate DECIMAL(10,2) NOT NULL,
    WeeklyRate DECIMAL(10,2) NOT NULL,
    SecurityDeposit DECIMAL(10,2) NOT NULL,
    FreeKmPerDay INT NOT NULL DEFAULT 250,
    ExtraKmRate DECIMAL(6,2) NOT NULL DEFAULT 10.00,
    IsAvailable BIT NOT NULL DEFAULT 1,
    RegistrationNumber NVARCHAR(50) NULL,
    CreatedAt DATETIME2 DEFAULT GETUTCDATE()
);

-- 3. Table: TourPackages (7-Day Odisha Weekly Circuits)
CREATE TABLE TourPackages (
    PackageId INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    Tagline NVARCHAR(300) NULL,
    DurationDays INT NOT NULL DEFAULT 7,
    DurationNights INT NOT NULL DEFAULT 6,
    Category NVARCHAR(100) NOT NULL,
    BasePriceSelfDrive DECIMAL(10,2) NOT NULL,
    BasePriceWithDriver DECIMAL(10,2) NOT NULL,
    PickupLocation NVARCHAR(200) NOT NULL,
    CreatedAt DATETIME2 DEFAULT GETUTCDATE()
);

-- 4. Table: Customers
CREATE TABLE Customers (
    CustomerId INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(150) NOT NULL,
    PhoneNumber NVARCHAR(20) NOT NULL UNIQUE,
    Email NVARCHAR(150) NULL,
    DrivingLicenseNumber NVARCHAR(50) NULL,
    GovtIdNumber NVARCHAR(50) NULL,
    City NVARCHAR(100) NULL,
    State NVARCHAR(100) NULL,
    CreatedAt DATETIME2 DEFAULT GETUTCDATE()
);

-- 5. Table: Bookings
CREATE TABLE Bookings (
    BookingId INT IDENTITY(1,1) PRIMARY KEY,
    BookingReference NVARCHAR(50) NOT NULL UNIQUE,
    CustomerId INT NOT NULL FOREIGN KEY REFERENCES Customers(CustomerId),
    BookingType NVARCHAR(20) NOT NULL, -- 'Car' or 'Tour'
    VehicleId INT NULL FOREIGN KEY REFERENCES Vehicles(VehicleId),
    PackageId INT NULL FOREIGN KEY REFERENCES TourPackages(PackageId),
    PickupLocation NVARCHAR(200) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    TotalDays INT NOT NULL,
    RentalAmount DECIMAL(10,2) NOT NULL,
    GstAmount DECIMAL(10,2) NOT NULL,
    SecurityDeposit DECIMAL(10,2) NOT NULL,
    TotalPayable DECIMAL(10,2) NOT NULL,
    DepositRefunded BIT NOT NULL DEFAULT 0,
    Status NVARCHAR(50) NOT NULL DEFAULT 'Pending', -- 'Pending', 'Confirmed', 'Completed'
    CreatedAt DATETIME2 DEFAULT GETUTCDATE()
);
  `;

  res.json({
    database: 'Microsoft SQL Server',
    backend: 'ASP.NET Core 8.0 / 9.0 Web API with Entity Framework Core',
    frontend: 'Angular 18+ Standalone Components with RxJS & Signals',
    schemaSql: sqlScript,
  });
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve('dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve('dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Beyond Drive+ full-stack server running on http://localhost:${port}`);
  });
}

startServer();
