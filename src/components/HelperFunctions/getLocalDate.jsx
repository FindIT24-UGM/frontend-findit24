export default function getLocaleDate(createdAt, type = "long") {
  const date = new Date(createdAt);

  const depan = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const belakang = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  let hari = date.toLocaleDateString("id-ID", depan);
  let waktu = date.toLocaleTimeString("id-ID", belakang).replace(/\./g, ":");
  const formattedDate = hari + ", " + waktu;

  if (type === "short") {
    return hari;
  } else if (type === "long") {
    return formattedDate;
  }
}
