//function to save expression
import { saveExpression } from "../../_lib/data_service";
import { calculateTopExpressions } from "../../_lib/data_service";


export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { key, value } = req.body;
      const data = await saveExpression(key, value);
      if (data) {
        res.status(201).json(data);
      } else {
        res.status(500).json({ error: 'Error saving expression' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    }

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;

        try {
      await calculateTopExpressions(email);
      res.status(200).json({ message: "Top expressions calculated and saved." });
    } catch (error) {
      console.error("Error calculating top expressions:", error);
      res.status(500).json({ error: "Error calculating top expressions." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


