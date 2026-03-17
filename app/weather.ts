export function shouldShowWeddingForecast(
  weddingDateString: string,
  daysBefore = 5
) {
  const today = new Date();
  const weddingDate = new Date(`${weddingDateString}T00:00:00`);

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInMs = weddingDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / msPerDay);

  return diffInDays <= daysBefore && diffInDays >= 0;
}

export function getWeatherLabel(code: number) {
  const map: Record<number, string> = {
    0: "céu limpo",
    1: "predominantemente limpo",
    2: "parcialmente nublado",
    3: "nublado",
    45: "neblina",
    48: "neblina com geada",
    51: "garoa leve",
    53: "garoa moderada",
    55: "garoa intensa",
    61: "chuva leve",
    63: "chuva moderada",
    65: "chuva forte",
    80: "pancadas de chuva leves",
    81: "pancadas de chuva moderadas",
    82: "pancadas de chuva fortes",
    95: "trovoadas",
  };

  return map[code] ?? "condições variáveis";
}