import { Router } from "express";
const router = Router();

router.get("/", (req,res) => {
        res.send("WellCome TO LEET BRO")
});

export default router;
