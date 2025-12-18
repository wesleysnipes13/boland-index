import React from 'react';
import { Utensils, Activity, Moon, Users, Target } from 'lucide-react';

const LongevityGuide: React.FC = () => {
  return (
    <div className="mt-20 border-t border-neutral-200 pt-16 text-left max-w-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">
          Longevity Optimization Guide: <br/>The 5 Pillars of Health
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          This guide synthesizes the highest-impact behaviors for optimizing healthspan and lifespan, backed by rigorous scientific evidence.
        </p>
      </div>

      <div className="space-y-16">
        {/* Nutrition */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Utensils className="w-6 h-6 text-neutral-900" />
            <h3 className="text-xl font-bold text-neutral-900">1. Nutrition: Fueling Longevity</h3>
          </div>
          <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc pl-5 marker:text-neutral-300">
            <li>
              <strong className="text-neutral-900 font-semibold">Prioritize Whole Foods:</strong> Build your diet on whole, single-ingredient foods. Strictly minimize consumption of ultra-processed foods (UPFs), as high intake (&gt;4 servings/day) is independently associated with a 62% increased hazard for all-cause mortality <sup className="text-xs font-medium text-neutral-400">[1]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Consume High Protein:</strong> Target sufficient protein (1.2–1.5+ g/kg/day) and distribute it adequately across meals (e.g., 30g/meal) to counteract age-related sarcopenia and maintain functional independence <sup className="text-xs font-medium text-neutral-400">[2]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Limit Alcohol:</strong> Rare or never consume alcohol (0-2 drinks/week). Recent large-scale analyses indicate that the "safe" level of alcohol consumption for minimizing health loss is near zero <sup className="text-xs font-medium text-neutral-400">[3]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Metabolic Control:</strong> Actively limit added sugars to maintain insulin sensitivity. Metabolic dysfunction is a primary driver of chronic disease <sup className="text-xs font-medium text-neutral-400">[4]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Gut Health:</strong> Consume a diverse variety of fiber sources daily. High dietary fiber intake is inversely associated with the risk of cardiovascular disease and all-cause mortality <sup className="text-xs font-medium text-neutral-400">[5]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Time Your Meals:</strong> Stop eating at least 2 hours before sleep. Late-night eating can negatively impact metabolic markers and circadian alignment <sup className="text-xs font-medium text-neutral-400">[6]</sup>.
            </li>
          </ul>
        </section>

        {/* Movement */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-neutral-900" />
            <h3 className="text-xl font-bold text-neutral-900">2. Movement: Functional Reserve</h3>
          </div>
          <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc pl-5 marker:text-neutral-300">
            <li>
              <strong className="text-neutral-900 font-semibold">The VO2 Max Imperative:</strong> Incorporate high-intensity intervals (e.g., Zone 4/5) at least once per week. Cardiorespiratory fitness (VO2 Max) is arguably the strongest predictor of longevity; elite performers have an 80% reduction in mortality risk compared to low performers <sup className="text-xs font-medium text-neutral-400">[7]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Cardio Base:</strong> Accumulate at least 150 minutes of low-to-moderate intensity aerobic activity (Zone 2) weekly to optimize mitochondrial function and metabolic flexibility <sup className="text-xs font-medium text-neutral-400">[8]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Functional Strength:</strong> Intentionally train grip strength. Grip strength is a simple, powerful predictor of all-cause mortality and cardiovascular disease, often outperforming systolic blood pressure as a prognostic tool <sup className="text-xs font-medium text-neutral-400">[9]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Step Count:</strong> Aim for 7,000 to 10,000+ steps daily. The mortality benefit curves tend to plateau or decelerate after ~7,000–8,000 steps for older adults <sup className="text-xs font-medium text-neutral-400">[10]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Sit-Rise Test:</strong> Regularly assess functional reserve. The ability to sit and rise from the floor without hand support is a significant predictor of all-cause mortality <sup className="text-xs font-medium text-neutral-400">[11]</sup>.
            </li>
             <li>
              <strong className="text-neutral-900 font-semibold">Break Sedentary Time:</strong> Actively break up periods of sitting every 45-60 minutes to mitigate the metabolic risks associated with prolonged sedentary behavior <sup className="text-xs font-medium text-neutral-400">[12]</sup>.
            </li>
          </ul>
        </section>

        {/* Sleep */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Moon className="w-6 h-6 text-neutral-900" />
            <h3 className="text-xl font-bold text-neutral-900">3. Sleep: Recovery & Restoration</h3>
          </div>
          <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc pl-5 marker:text-neutral-300">
            <li>
              <strong className="text-neutral-900 font-semibold">Target Quantity:</strong> Consistently get 7-9 hours of sleep. Short sleep duration (&lt;6-7 hours) is consistently associated with a higher risk of death from all causes <sup className="text-xs font-medium text-neutral-400">[13]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Cognitive Clearance:</strong> Sleep drives the "glymphatic system," which clears metabolic waste products (like beta-amyloid) from the brain, protecting against neurodegeneration <sup className="text-xs font-medium text-neutral-400">[14]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Circadian Anchor:</strong> Expose eyes to morning sunlight. Light is the primary <em>zeitgeber</em> (time-giver) for the master circadian clock, regulating sleep pressure and hormone release <sup className="text-xs font-medium text-neutral-400">[15]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Environment:</strong> Sleep in a room that is completely dark and cool (65-68°F). Thermal environment significantly impacts sleep stages, particularly REM and deep sleep <sup className="text-xs font-medium text-neutral-400">[16]</sup>.
            </li>
             <li>
              <strong className="text-neutral-900 font-semibold">Avoid Disruptors:</strong> Avoid alcohol within 3-4 hours of bed. While alcohol may reduce sleep onset latency, it significantly fragments REM sleep and reduces overall sleep quality <sup className="text-xs font-medium text-neutral-400">[17]</sup>.
            </li>
          </ul>
        </section>

        {/* Social */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-neutral-900" />
            <h3 className="text-xl font-bold text-neutral-900">4. Social Connection: Quality & Depth</h3>
          </div>
          <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc pl-5 marker:text-neutral-300">
            <li>
              <strong className="text-neutral-900 font-semibold">Loneliness vs. Mortality:</strong> Social isolation and loneliness are major risk factors for mortality, with an effect size comparable to smoking and exceeding that of obesity and physical inactivity <sup className="text-xs font-medium text-neutral-400">[18]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Support Network:</strong> Maintain a "thick" support network. Strong social integration is linked to lower levels of inflammation (C-reactive protein) and better physiological regulation <sup className="text-xs font-medium text-neutral-400">[19]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Quality Engagement:</strong> Focus on meaningful, face-to-face interactions. The quality of close relationships is a better predictor of happiness and health in late life than cholesterol levels <sup className="text-xs font-medium text-neutral-400">[20]</sup>.
            </li>
             <li>
              <strong className="text-neutral-900 font-semibold">Belonging:</strong> Cultivate a sense of belonging. Social capital and community cohesion are protective factors against stress and cognitive decline.
            </li>
          </ul>
        </section>

        {/* Purpose */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-neutral-900" />
            <h3 className="text-xl font-bold text-neutral-900">5. Purpose: Resilience</h3>
          </div>
          <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc pl-5 marker:text-neutral-300">
            <li>
              <strong className="text-neutral-900 font-semibold">Ikigai/Life Purpose:</strong> Have a clear reason to get out of bed. Individuals with a strong sense of purpose (<em>Ikigai</em>) demonstrate significantly lower risk of mortality and cardiovascular events <sup className="text-xs font-medium text-neutral-400">[21]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Life Purpose & Health:</strong> Higher purpose in life is associated with lower risk of mortality and cardiovascular disease among older adults <sup className="text-xs font-medium text-neutral-400">[22]</sup>.
            </li>
            <li>
              <strong className="text-neutral-900 font-semibold">Growth Mindset:</strong> View stress as a challenge. Psychological resilience and positive stress appraisal buffer the negative physiological effects of the stress response (cortisol) <sup className="text-xs font-medium text-neutral-400">[23]</sup>.
            </li>
             <li>
              <strong className="text-neutral-900 font-semibold">Cognitive Engagement:</strong> Engage in continuous learning. Cognitive reserve—built through lifelong mental stimulation—delays the onset of clinical symptoms of dementia <sup className="text-xs font-medium text-neutral-400">[24]</sup>.
            </li>
             <li>
              <strong className="text-neutral-900 font-semibold">Autonomy:</strong> Maintain a sense of agency. Low perceived control is a risk factor for cardiovascular disease and mortality.
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-24 pt-10 border-t border-neutral-200">
        <h4 className="text-sm font-bold text-neutral-400 tracking-wider uppercase mb-6">References</h4>
        <div className="grid grid-cols-1 gap-4">
            {[
                "Mendonça, R. D., et al. (2019). Association between consumption of ultra-processed foods and all cause mortality: SUN prospective cohort study. BMJ, 365, l1949.",
                "Bauer, J., et al. (2013). Evidence-based recommendations for optimal protein intake in older people: a position paper from the PROT-AGE Study Group. Journal of the American Medical Directors Association, 14(8), 542-559.",
                "GBD 2016 Alcohol Collaborators. (2018). Alcohol use and burden for 195 countries and territories, 1990–2016: a systematic analysis for the Global Burden of Disease Study 2016. The Lancet, 392(10152), 1015-1035.",
                "Stanhope, K. L. (2016). Sugar consumption, metabolic disease and obesity: The state of the controversy. Critical Reviews in Clinical Laboratory Sciences, 53(1), 52-67.",
                "Reynolds, A., et al. (2019). Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. The Lancet, 393(10170), 434-445.",
                "Kinsey, A. W., & Ormsbee, M. J. (2015). The health impact of nighttime eating: old and new perspectives. Nutrients, 7(4), 2648-2662.",
                "Mandsager, K., et al. (2018). Association of Cardiorespiratory Fitness With Long-term Mortality Among Adults Undergoing Exercise Treadmill Testing. JAMA Network Open, 1(6), e183605.",
                "Piercy, K. L., et al. (2018). The Physical Activity Guidelines for Americans. JAMA, 320(19), 2020-2028.",
                "Leong, D. P., et al. (2015). Prognostic value of grip strength: findings from the Prospective Urban Rural Epidemiology (PURE) study. The Lancet, 386(9990), 266-273.",
                "Paluch, A. E., et al. (2022). Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts. The Lancet Public Health, 7(3), e219-e228.",
                "Brito, L. B., et al. (2012). Ability to sit and rise from the floor as a predictor of all-cause mortality. European Journal of Preventive Cardiology, 21(7), 892-898.",
                "Biswas, A., et al. (2015). Sedentary time and its association with risk for disease incidence, mortality, and hospitalization in adults: a systematic review and meta-analysis. Annals of Internal Medicine, 162(2), 123-132.",
                "Cappuccio, F. P., et al. (2010). Sleep duration and all-cause mortality: a systematic review and meta-analysis of prospective studies. Sleep, 33(5), 585-592.",
                "Xie, L., et al. (2013). Sleep drives metabolite clearance from the adult brain. Science, 342(6156), 373-377.",
                "Duffy, J. F., & Czeisler, C. A. (2009). Effect of Light on Human Circadian Physiology. Sleep Medicine Clinics, 4(2), 165-177.",
                "Okamoto-Mizuno, K., & Mizuno, K. (2012). Effects of thermal environment on sleep and circadian rhythm. Journal of Physiological Anthropology, 31(1), 14.",
                "Ebrahim, I. O., et al. (2013). Alcohol and sleep I: effects on normal sleep. Alcoholism: Clinical and Experimental Research, 37(4), 539-549.",
                "Holt-Lunstad, J., et al. (2010). Social relationships and mortality risk: a meta-analytic review. PLoS Medicine, 7(7), e1000316.",
                "Yang, Y. C., et al. (2016). Social relationships and physiological determinants of longevity across the human life span. Proceedings of the National Academy of Sciences, 113(3), 578-583.",
                "Waldinger, R. J., & Schulz, M. S. (2010). What's love got to do with it? Social functioning, perceived health, and daily happiness in married octogenarians. Psychology and Aging, 25(2), 422.",
                "Sone, T., et al. (2008). Sense of life worth living (ikigai) and mortality in Japan: Ohsaki Study. Psychosomatic Medicine, 70(6), 709-715.",
                "Alimujiang, A., et al. (2019). Association Between Life Purpose and Mortality Among US Adults Older Than 50 Years. JAMA Network Open, 2(5), e194270.",
                "Epel, E. S., et al. (2018). More than a feeling: A unified view of stress measurement for population science. Frontiers in Neuroendocrinology, 49, 146-169.",
                "Stern, Y. (2012). Cognitive reserve in ageing and Alzheimer's disease. The Lancet Neurology, 11(11), 1006-1012."
            ].map((ref, i) => (
                <p key={i} className="text-[10px] sm:text-xs text-neutral-500 italic leading-relaxed">
                    <span className="font-semibold not-italic text-neutral-400 mr-2">({i + 1})</span>
                    {ref}
                </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LongevityGuide;
