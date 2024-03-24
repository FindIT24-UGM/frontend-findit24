import loadingJson from "../../assets/loading.json";

export default function handler(req, res) {
  res.status(200).json(loadingJson);
}
