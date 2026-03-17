import { getWeatherLabel, shouldShowWeddingForecast } from "@/app/weather";
const WEDDING_DATE = "2026-08-01";

type OpenMeteoResponse = {
  daily?: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max?: number[];
  };
};

async function getWeddingForecast() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-23.5505&longitude=-46.6333&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;

  const data: OpenMeteoResponse = await res.json();

  if (!data.daily) return null;

  const index = data.daily.time.findIndex(
    (date) => date === WEDDING_DATE
  );

  if (index === -1) return null;

  return {
    code: data.daily.weather_code[index],
    max: data.daily.temperature_2m_max[index],
    min: data.daily.temperature_2m_min[index],
    rain:
      data.daily.precipitation_probability_max?.[index] ?? null,
  };
}

export async function WeddingWeather() {
  const showForecast = shouldShowWeddingForecast(WEDDING_DATE, 5);

  let forecast = null;

  if (showForecast) {
    forecast = await getWeddingForecast();
  }

  return (
    <>
      {/* HISTORICAL TEXT (always visible) */}
      <p>
        No início de agosto, São Paulo costuma ter um clima ameno e agradável,
        típico do inverno paulistano. As temperaturas médias ficam entre{" "}
        <span className="font-semibold">12 °C e 24 °C</span>, com dias
        ensolarados ou parcialmente nublados e noites mais frescas.
      </p>

      <p className="mt-4">
        Esse também é um dos períodos mais secos do ano, com baixa chance de
        chuva — ideal para aproveitar a cidade e celebrar.
      </p>

      <p className="mt-4">
        Recomendamos trazer um <span className="font-semibold">casaco leve</span>{" "}
        para a noite ✨
      </p>

      {/* FORECAST BLOCK (only appears 5 days before) */}
      {showForecast && forecast && (
        <div className="mt-8">
          <p className="font-semibold">
            Previsão atual para o dia do casamento:
          </p>

          <p className="mt-3">
            Mínima de <span className="font-semibold">{forecast.min} °C</span> e
            máxima de <span className="font-semibold">{forecast.max} °C</span>,
            com{" "}
            <span className="font-semibold">
              {getWeatherLabel(forecast.code)}
            </span>
            .
          </p>

          {forecast.rain !== null && (
            <p className="mt-3">
              Chance de chuva:{" "}
              <span className="font-semibold">{forecast.rain}%</span>.
            </p>
          )}

          <p className="mt-6 text-sm opacity-70">
            *Previsão sujeita a alterações.*
          </p>
        </div>
      )}

      {!showForecast && (
        <p className="mt-6 text-sm opacity-70">
          *A previsão atual será exibida aqui alguns dias antes do casamento.*
        </p>
      )}
    </>
  );
}