const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// فایل‌های داخل پوشه اصلی پروژه
app.use(express.static(__dirname));

// صفحه اصلی
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// اجرای سرور
app.listen(PORT, () => {
  console.log(`Karino is running on port ${PORT}`);
});
