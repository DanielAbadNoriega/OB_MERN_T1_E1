const express = require("express");
const dotenv = require("dotenv");

// Configuration the .env file
/**
 * Al realizar esta llamada, se genera el objeto 'process.env' donde se han cargado
 * todas las variables de entorno del archivo .env
 */
dotenv.config(); 

// Create EXPRESS APP
const server = express();
const port = process.env.PORT || 8000;