# Deployment Guide

## Overview
This guide explains how to deploy the Money Personality Test application to various hosting platforms.

## Prerequisites

### Required Accounts
- **Airtable Account**: For database functionality
- **GitHub Account**: For version control (optional)
- **Hosting Platform Account**: Netlify, Vercel, or similar

### Required Setup
1. **Airtable Base**: Create the three tables as specified in PersonalityTest.md
2. **Environment Variables**: Set up API keys and configuration
3. **Domain**: Optional custom domain setup

## Airtable Setup

### 1. Create Airtable Base
1. Go to [airtable.com](https://airtable.com)
2. Create a new base called "Money Personality Test"
3. Create three tables: `Users`, `Questions`, `Results`

### 2. Configure Tables

#### Users Table
- **Name** (Single Line Text)
- **Email** (Email)

#### Questions Table
- **Question No.** (Number)
- **Question** (Long Text)
- **Personality Type** (Single Select: Saver, Spender, Giver, Money Avoider, Status Seeker)

#### Results Table
- **User Email** (Linked to Users)
- **Answers (JSON)** (Long Text)
- **Saver Score** (Number)
- **Spender Score** (Number)
- **Giver Score** (Number)
- **Money Avoider Score** (Number)
- **Status Seeker Score** (Number)
- **Final Personality** (Single Select: Saver, Spender, Giver, Money Avoider, Status Seeker)

### 3. Get API Credentials
1. Go to [airtable.com/api](https://airtable.com/api)
2. Select your base
3. Copy the Base ID and API Key

## Environment Variables

Create a `.env` file in the project root:

```env
# Airtable Configuration
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_API_KEY=your_api_key_here

# App Configuration
NODE_ENV=production
APP_URL=https://your-domain.com
```

## Deployment Options

### Option 1: Netlify (Recommended)

#### 1. Prepare for Deployment
```bash
# Build the project (if using a build tool)
npm run build

# Or simply copy files to a deployment folder
mkdir deploy
cp -r public/* deploy/
cp -r src/* deploy/
```

#### 2. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag your `deploy` folder
3. Set environment variables in Netlify dashboard:
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_API_KEY`

#### 3. Configure Domain
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain or use the provided netlify.app URL

### Option 2: Vercel

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Deploy
```bash
vercel
```

#### 3. Set Environment Variables
```bash
vercel env add AIRTABLE_BASE_ID
vercel env add AIRTABLE_API_KEY
```

### Option 3: GitHub Pages

#### 1. Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/money-personality-test.git
git push -u origin main
```

#### 2. Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose `main` branch and `/` folder

### Option 4: Traditional Web Hosting

#### 1. Upload Files
Upload the following files to your web server:
- `public/index.html`
- `src/styles/styles.css`
- `src/js/` (all JavaScript files)
- `public/assets/` (images and icons)

#### 2. Configure Server
Ensure your server supports:
- Static file serving
- CORS headers (if needed)
- HTTPS (recommended)

## Post-Deployment Checklist

### 1. Test Functionality
- [ ] Welcome screen loads correctly
- [ ] User form validation works
- [ ] Questions display properly
- [ ] Progress bar updates
- [ ] Results calculation is accurate
- [ ] Airtable integration works

### 2. Performance Optimization
- [ ] Images are optimized
- [ ] CSS is minified
- [ ] JavaScript is minified
- [ ] Gzip compression enabled
- [ ] Browser caching configured

### 3. Security
- [ ] HTTPS is enabled
- [ ] API keys are secure
- [ ] CORS is properly configured
- [ ] No sensitive data in client-side code

### 4. Analytics (Optional)
- [ ] Google Analytics installed
- [ ] Airtable analytics enabled
- [ ] Error tracking configured

## Troubleshooting

### Common Issues

#### 1. Airtable API Errors
**Problem**: 401 Unauthorized errors
**Solution**: Check API key and base ID in environment variables

#### 2. CORS Errors
**Problem**: Cross-origin request blocked
**Solution**: Configure CORS headers on your server

#### 3. Environment Variables Not Loading
**Problem**: Variables undefined in browser
**Solution**: Ensure variables are set in hosting platform dashboard

#### 4. Build Errors
**Problem**: Deployment fails
**Solution**: Check for syntax errors and missing dependencies

### Debug Mode
Enable debug mode by setting:
```javascript
window.DEBUG_MODE = true;
```

This will show console logs for debugging.

## Monitoring

### 1. Airtable Usage
Monitor your Airtable usage at:
https://airtable.com/account

### 2. Website Analytics
Set up analytics to track:
- Page views
- Test completions
- User engagement
- Error rates

### 3. Performance Monitoring
Use tools like:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse

## Updates and Maintenance

### 1. Code Updates
1. Make changes locally
2. Test thoroughly
3. Deploy to staging (if available)
4. Deploy to production

### 2. Airtable Updates
- Backup data before major changes
- Test API calls after schema changes
- Update documentation

### 3. Regular Maintenance
- Monitor error logs
- Update dependencies
- Review performance metrics
- Backup data regularly

## Support

For deployment issues:
1. Check hosting platform documentation
2. Review error logs
3. Test locally first
4. Contact platform support if needed

For Airtable issues:
1. Check API documentation
2. Verify credentials
3. Test API calls manually
4. Contact Airtable support 