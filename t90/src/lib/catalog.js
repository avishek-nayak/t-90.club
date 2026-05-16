// Single source of truth for the t90.club calculator catalog.
// Audience: runners + cyclists. Focus: nutrition intake + performance.

export const categories = [
  {
    id: 'fueling',
    name: 'Fueling & nutrition',
    blurb: 'What to eat, how much, and when.',
    calculators: [
      { slug: 'daily-fuel',          name: 'Daily fuel needs',           desc: 'Calories you actually need on training days.',           status: 'live' },
      { slug: 'carbs-protein',       name: 'Daily carbs & protein',      desc: 'g/kg targets by training intensity day.',                 status: 'soon' },
      { slug: 'during-workout-carbs',name: 'During-workout carbs',       desc: 'g/hr fueling target by duration.',                        status: 'live' },
      { slug: 'sweat-hydration',     name: 'Sweat rate & hydration',     desc: 'Personalised plan from pre/post weight check.',           status: 'soon' },
      { slug: 'sodium-loss',         name: 'Sodium loss & replacement',  desc: 'mg/hr sodium by sweat profile.',                          status: 'soon' },
      { slug: 'race-fuel-plan',      name: 'Race-day fuel plan',         desc: 'Total carbs across race duration, split by hour.',        status: 'soon' },
      { slug: 'caffeine-dose',       name: 'Caffeine dose & timing',     desc: 'mg/kg pre-race + window.',                                status: 'soon' },
    ],
  },
  {
    id: 'running',
    name: 'Running performance',
    blurb: 'Predict, pace, and structure your runs.',
    calculators: [
      { slug: 'race-predictor', name: 'Race time predictor',     desc: 'Riegel formula across 5K \u2192 marathon.',          status: 'live' },
      { slug: 'pace-converter', name: 'Pace / time / distance',  desc: 'Convert between the three.',                         status: 'soon' },
      { slug: 'vdot-paces',     name: 'VDOT training paces',     desc: "Daniels' Easy / Threshold / Interval paces.",        status: 'live' },
    ],
  },
  {
    id: 'cycling',
    name: 'Cycling performance',
    blurb: 'Watts, weight, and the math that wins climbs.',
    calculators: [
      { slug: 'ftp-zones', name: 'FTP power zones',      desc: 'Coggan 7-zone power breakdown.',          status: 'live' },
      { slug: 'w-per-kg',  name: 'W/kg power-to-weight', desc: 'Climbing category by W/kg.',              status: 'live' },
      { slug: 'tss',       name: 'TSS estimator',        desc: 'Training stress from power & duration.', status: 'soon' },
    ],
  },
];

export const totalCount = categories.reduce((n, c) => n + c.calculators.length, 0);
export const liveCount  = categories.reduce((n, c) => n + c.calculators.filter(x => x.status === 'live').length, 0);

// Flat list — used by the dynamic stub route.
export const allCalcs = categories.flatMap((c) =>
  c.calculators.map((calc) => ({ ...calc, category: c.name, categoryId: c.id }))
);
