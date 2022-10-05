import express from "express";
import { getVehicles, createVehicle } from "../controllers/vehicles.js";
import {
  getClients,
  findById,
  createClient,
  createInvoice,
  fetchInvoices,
} from "../controllers/clients.js";
import { getDrivers, createDriver } from "../controllers/drivers.js";
import {
  getExpenses,
  createExpense,
  getExpenseByType,
} from "../controllers/expenses.js";
import { createEvent, getEvents } from "../controllers/event.js";

const router = express.Router();

//--Get Routes
router.get("/vehicles", getVehicles);
router.get("/clients", getClients);
router.get("/drivers", getDrivers);
router.get("/expenses", getExpenses);
router.get("/events", getEvents);

//--FindBy Routes
router.get("/clients/:id", findById);
router.get("/clients/:id/fetch", fetchInvoices);
router.get("/expenses/fetchtype", getExpenseByType);

//--Post Routes
router.post("/vehicles", createVehicle);
router.post("/clients", createClient);
router.post("/clients/invoices", createInvoice);
router.post("/drivers", createDriver);
router.post("/expenses", createExpense);
router.post("/events", createEvent);

export default router;
