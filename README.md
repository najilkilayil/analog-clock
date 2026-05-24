# 🕒 Analog Clock

A realistic analog clock built using only **HTML,CSS and JavaScript**.

The clock updates in real time and includes smooth rotaing hour, minute and second needles.

----

## 🚀 Features

- Real-time working analog clock
- Smooth rotating needles
- Dark modern UI
- CSS box-shadow effects

---

## 🚀 Updated Features
- Real-time working digital clock
- Text with animation
- Digital clock with hover animation

----

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript

---

## 📂 Project Structure
```
analog-clock/
|
├── index.html
├── style.css
├── script.js
├── README.md
└── clock.png
```

----

## ⚙️ How It Works
**JavaScript Logic**
- *Date()* is used to get current:
    - Hours
    - Minutes
    - Seconds
- Clock needle rotation
    - 360/60 = 6deg per second/minute
    - 360/12 = 30deg per hour
```
hr.style.transform = `rotate(${hh+(mm/12)}deg)`;
min.style.transform = `rotate(${mm}deg)`;
sec.style.transform = `rotate(${ss}deg)`;
```

----

## 🎨 Future Plans
- Real-time weather data
- Dark/Light theme option
- Search and find real-time data of an location
- Adavnced animations

---

## 👨‍💻 Author

Made with ❤️ ***Najil Kilayil***

------