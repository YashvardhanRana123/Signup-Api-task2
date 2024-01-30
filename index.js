const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require("./db/User");
const product = require('./db/Product')
const contact = require('./db/Contact')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
const http = require('http');
const fs = require ('fs');



const Jwt = require("jsonwebtoken");
const Product = require('./db/Product');
const jwtkey = 'e-comm';

const app = express();



app.use(express.json());
app.use(cors());
