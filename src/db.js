import mongoose from 'mongoose';
import chalk from 'chalk';

const DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_URL}`;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

const { connection } = mongoose;

connection.on('open', () => {
  console.log(chalk.greenBright('> MongoDB Connected'));
});

connection.on('error', (err) => {
  console.error(err);
});
