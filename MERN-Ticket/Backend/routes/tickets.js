import express from "express";
import {
  createTicket,
  getTickets,
  updateTicket,
  deleteTicket,
  geticketById,
  
} from "../controllers/tickets.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getTickets);
router.post("/",createTicket);
router.patch("/:id",updateTicket);
router.post("/delete/:id", deleteTicket);
router.get("/:id",geticketById)

export default router;
