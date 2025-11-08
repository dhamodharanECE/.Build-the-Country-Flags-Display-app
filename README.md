# 🌍 Country Flags Viewer – ReactJS Application

# 🧭 Overview

This project is a ReactJS-based UI that fetches and displays country flags and names using a public API.
The user can scroll to view more flags, and every flag is displayed with proper accessibility features and error handling.

This project demonstrates core frontend skills such as API fetching, React hooks, error handling, responsive rendering, and clean component structure.

# 🚀 Features

✅ Fetches all country data from the API
✅ Displays country flag (image) + country name
✅ Proper alt text for every country flag (accessibility best practice)
✅ Graceful error handling with console.error("Error fetching data: ", error)
✅ Clean UI matching the design reference
✅ Scrollable list of country cards
✅ Written using React Functional Components + Hooks

# 🔗 API Used

Countries data is fetched from:
```base
https://xcountries-backend.labs.crio.do/all
```

A single object includes:

name – Country name

flag – Image URL of the country’s flag

# 🧠 Tech Stack

ReactJS (Functional Components)

JavaScript (ES6)

CSS / Flexbox / Grid

Fetch API

# 📦 Project Structure

```base
src/
├── components/
│   └── CountryCard.jsx
├── App.js
├── App.css
└── index.js
```
# ⚡ Getting Started

1️⃣ Clone the Repository

git clone 
```base
https://github.com/your-username/react-country-flags.git
```

2️⃣ Navigate into the Project Folder

cd react-country-flags

3️⃣ Install Dependencies
```
npm install
```
4️⃣ Start the Application
```
npm start
```

The app will run at:
```base
👉 http://localhost:3000
```

# 🧩 Implementation Details

✅ Fetching Data

Data is fetched using the Fetch API inside a useEffect hook.

If an error occurs, it is logged using:
```
console.error("Error fetching data: ", error);
```
✅ Rendering Country Cards

Each card contains:
```
Flag image with required alt="<country name> flag"
```
Country name displayed below the flag

✅ Accessibility

All <img> tags include meaningful alternatives:
```base
<img src={flag} alt={`${name} flag`} />
```
# 📸 UI Preview

# Main Page:

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/50411341-6829-46a1-84ed-3658353a9990" />

# 🧑‍💻 Developer

Dhamodharan S

Frontend Developer | React Enthusiast

📧 Email: 
```
dhamodharans206@gmail.com
```
🌐 GitHub:
```
https://github.com/dhamodharanECE
```

# 📝 License

This project is open source and available under the MIT License.

# Development:
```bash
https://build-the-country-flags-display-app-beta.vercel.app/
