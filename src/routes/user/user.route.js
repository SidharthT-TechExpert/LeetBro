import { Router } from "express";
const router = Router();
const hello = 'sidh'
router.get("/", (req,res) => {
        res.send("WellCome TO LEET BRO")
});

export default router;
