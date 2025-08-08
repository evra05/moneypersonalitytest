# API Documentation

## Overview
This document describes the API endpoints and data structures for the Money Personality Test application.

## Base URL
```
https://api.airtable.com/v0/{BASE_ID}
```

## Authentication
All API requests require an API key in the Authorization header:
```
Authorization: Bearer {API_KEY}
```

## Tables

### Users Table
Stores user information collected before the test.

**Fields:**
- `Name` (Single Line Text) - User's full name
- `Email` (Email) - User's email address

**Example Record:**
```json
{
  "id": "rec123456789",
  "fields": {
    "Name": "John Doe",
    "Email": "john@example.com"
  }
}
```

### Questions Table
Stores the 20 test questions and their associated personality types.

**Fields:**
- `Question No.` (Number) - Question number (1-20)
- `Question` (Long Text) - The question text
- `Personality Type` (Single Select) - Associated personality type

**Example Record:**
```json
{
  "id": "rec123456789",
  "fields": {
    "Question No.": 1,
    "Question": "Do you save part of your allowance every week?",
    "Personality Type": "Saver"
  }
}
```

### Results Table
Stores test results and calculated scores.

**Fields:**
- `User Email` (Linked to Users) - Reference to user who took the test
- `Answers (JSON)` (Long Text) - JSON string of all answers
- `Saver Score` (Number) - Score for Saver personality type
- `Spender Score` (Number) - Score for Spender personality type
- `Giver Score` (Number) - Score for Giver personality type
- `Money Avoider Score` (Number) - Score for Money Avoider personality type
- `Status Seeker Score` (Number) - Score for Status Seeker personality type
- `Final Personality` (Single Select) - Determined personality type

**Example Record:**
```json
{
  "id": "rec123456789",
  "fields": {
    "User Email": ["rec987654321"],
    "Answers (JSON)": "[true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false]",
    "Saver Score": 2,
    "Spender Score": 2,
    "Giver Score": 2,
    "Money Avoider Score": 2,
    "Status Seeker Score": 2,
    "Final Personality": "Saver"
  }
}
```

## API Endpoints

### Create User
**POST** `/Users`

Creates a new user record.

**Request Body:**
```json
{
  "fields": {
    "Name": "John Doe",
    "Email": "john@example.com"
  }
}
```

**Response:**
```json
{
  "id": "rec123456789",
  "fields": {
    "Name": "John Doe",
    "Email": "john@example.com"
  }
}
```

### Create Result
**POST** `/Results`

Creates a new test result record.

**Request Body:**
```json
{
  "fields": {
    "User Email": ["rec123456789"],
    "Answers (JSON)": "[true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false]",
    "Saver Score": 2,
    "Spender Score": 2,
    "Giver Score": 2,
    "Money Avoider Score": 2,
    "Status Seeker Score": 2,
    "Final Personality": "Saver"
  }
}
```

### Get Questions
**GET** `/Questions`

Retrieves all questions (optional - questions can be hardcoded in frontend).

**Response:**
```json
{
  "records": [
    {
      "id": "rec123456789",
      "fields": {
        "Question No.": 1,
        "Question": "Do you save part of your allowance every week?",
        "Personality Type": "Saver"
      }
    }
  ]
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": {
    "type": "INVALID_REQUEST",
    "message": "Invalid data format"
  }
}
```

### 401 Unauthorized
```json
{
  "error": {
    "type": "UNAUTHORIZED",
    "message": "Invalid API key"
  }
}
```

### 404 Not Found
```json
{
  "error": {
    "type": "NOT_FOUND",
    "message": "Table not found"
  }
}
```

### 429 Rate Limited
```json
{
  "error": {
    "type": "RATE_LIMITED",
    "message": "Rate limit exceeded"
  }
}
```

## Rate Limits
- 5 requests per second per base
- 100,000 requests per month per base

## Data Validation

### User Data
- Name: 2-50 characters, letters and spaces only
- Email: Valid email format

### Answer Data
- Must be array of 20 boolean values
- Each value represents Yes (true) or No (false)

### Score Data
- All scores must be numbers 0-4
- Total of all scores should equal number of "Yes" answers

## Testing
Use Airtable's API documentation for testing endpoints:
https://airtable.com/api 