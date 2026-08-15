const CLIENTS = [
  { name: "Northbay", meta: "Since 2023 · 5 projects" },
  { name: "Kestrel", meta: "Since 2021 · 4 projects" },
  { name: "Marrow", meta: "Since 2020 · 6 projects" },
  { name: "Lumen", meta: "Since 2019 · 9 projects" },
  { name: "Vantage", meta: "Since 2022 · 3 projects" },
  { name: "Orbit", meta: "Since 2024 · 2 projects" },
];

export default function Clients() {
  return (
    <section
      aria-labelledby="clients-h"
      className="border-y border-ink/[0.14] bg-card"
    >
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(52px,7vw,72px)]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <h2
            id="clients-h"
            className="max-w-[24ch] font-display text-[clamp(24px,3vw,32px)] font-normal leading-[1.18] text-ink"
          >
            Clients who kept calling back.
          </h2>
          <p className="text-right text-[10px] font-medium uppercase leading-[2] tracking-[0.14em] text-ink/50">
            Longest running relationship: 6 years
            <br />
            Average engagement: 3 projects
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px border border-ink/[0.14] bg-ink/[0.14]">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-2.5 bg-cream px-3.5 py-[30px]"
            >
              <span className="font-display text-[19px] font-medium text-ink">
                {client.name}
              </span>
              <span className="text-center text-[9px] font-medium uppercase leading-[1.6] tracking-[0.12em] text-ink/[0.42]">
                {client.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
