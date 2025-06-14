// testConnection.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AryanSankar:JiYiddbIGtf5JAMa@cluster0.yqzbdmb.mongodb.net/newsapp?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  process.exit();
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit();
});
