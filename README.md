# 🔗 EverLink
**EverLink** is a lightweight, open-source tool that lets you host your own URL Shortener & Redirector on **Cloudflare Pages**.

Instead of sharing a direct link to Discord, YouTube, or Instagram (which might change or expire), you share your **EverLink** (e.g., `joindc.pages.dev` or `join.yourdomain.com`).

When a user clicks it, they are instantly redirected to your current destination. If you need to change the destination, you just update one setting here, and your link updates everywhere instantly.

---

## 🤔 Why EverLink?

### The Problem
You run a community or brand. You put your Discord Invite Link (or portfolio link) in your **Instagram Bio, YouTube Description, Twitter, and Website**.

One day, that specific invite link gets **revoked, expires, or you delete it by mistake**.

Now, you have to manually go to *every single social media profile* to update the link. If you forget one, you lose potential members.

### The Solution: EverLink
With **EverLink**, you deploy your own redirect service. You can use the free subdomain (e.g., `joindc.pages.dev`) or connect your own custom domain (e.g., `join.example.com`).

**How it helps:**
1. You paste your EverLink URL everywhere once.
2. When you need to change the destination (e.g., a new Discord invite), you simply update **one setting** in Cloudflare.
3. **EverLink** instantly redirects all traffic to the new Invite Code/URL.
4. You never have to touch your Instagram or YouTube bio again.

---

## ✨ Features

- **🚀 Serverless Speed:** Runs on Cloudflare's Global Edge Network (latency is near zero).
- **⚡ Smart 307 Redirects:** Uses `HTTP 307 Temporary Redirect`. Browsers and bots will **never cache** the destination. Changes are reflected instantly.
- **🤖 Smart URL Handling:** Accepts full URLs (https, ftp, mailto, etc.) automatically. 
  If input is not a valid URL, it is treated as a Discord invite code.
- **💸 100% Free:** Runs entirely on the Cloudflare Pages Free Tier.

---

## 🛠️ Installation Guide

You can get this up and running in less than 2 minutes.

### Step 1: Fork this Repository
Click the link below to create a copy of this project in your GitHub account.

👉 **[Click here to Fork](../../fork)**

### Step 2: Deploy to Cloudflare
1. Go to the Cloudflare Dashboard using this direct link: **[![deploy on cf pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare)](https://dash.cloudflare.com?to=/:account/pages/new/provider/github)**
   
2. Select your GitHub account and choose the **EverLink** repository you just forked.
3. Click **Begin setup**.

### Step 3: Configuration (Important!)
In the build settings page, fill in the following details:

1. **Project name:** This determines your free subdomain.
   - *Example:* If you type `joindc`, your link will be `https://joindc.pages.dev`.
2. **Framework Preset:** Leave as `None`.
3. **Build command:** Leave empty.
4. **Build output directory:** Leave empty.
5. Scroll down and open the **Environment variables (advanced)** tab.
6. Click **Add variable** and enter:
   - **Variable name:** `TARGET_URL`
   - **Value:**
     - A full valid URL (e.g., https://tata.com)
     - OR a Discord invite code (e.g., AbCd123)

If the value is not a valid URL, it will automatically be converted to:
https://discord.gg/<your-code>

7. Click **Save and Deploy**.

---

## 🔄 How to Update Your Link
When your old Discord invite expires or you want to redirect users somewhere else:

1. Go to your **Cloudflare Pages Dashboard**.
2. Click on your **EverLink** project.
3. Navigate to **Settings** > **Environment variables**.
4. Edit the `TARGET_URL` variable with the new code or link.
5. Go to the **Deployments** tab.
6. Click the **three dots (...)** next to the latest deployment and select **Retry deployment**.

*Your link is now updated across the entire internet instantly!*

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
