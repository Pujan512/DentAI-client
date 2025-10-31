export default function FirstAid() {
  const emergencyTips = [
    {
      title: "Toothache",
      icon: "🦷",
      steps: [
        "Rinse mouth with warm water",
        "Use dental floss to remove any food particles",
        "Apply a cold compress if swollen",
        "Avoid placing aspirin on the aching tooth",
        "See a dentist as soon as possible"
      ]
    },
    {
      title: "Knocked-Out Tooth",
      icon: "🚑",
      steps: [
        "Pick up tooth by the crown, not root",
        "Rinse gently if dirty, but don't scrub",
        "Try to reinsert into socket if possible",
        "Keep tooth moist in milk or saliva",
        "See dentist immediately (within 30 minutes)"
      ]
    },
    {
      title: "Broken Tooth",
      icon: "⚠️",
      steps: [
        "Rinse mouth with warm water",
        "Apply cold compress to reduce swelling",
        "Save any tooth fragments",
        "Use temporary dental cement if available",
        "See dentist as soon as possible"
      ]
    },
    {
      title: "Bitten Lip or Tongue",
      icon: "👅",
      steps: [
        "Clean area gently with water",
        "Apply cold compress to reduce swelling",
        "Use gentle pressure with clean cloth",
        "If bleeding doesn't stop, seek medical help",
        "Avoid hot foods until healed"
      ]
    }
  ];

  const preventionTips = [
    {
      title: "Regular Check-ups",
      description: "Visit your dentist every 6 months for routine examinations"
    },
    {
      title: "Proper Hygiene",
      description: "Brush twice daily and floss regularly to maintain oral health"
    },
    {
      title: "Protective Gear",
      description: "Wear mouthguards during sports activities"
    },
    {
      title: "Healthy Diet",
      description: "Limit sugary foods and drinks that can cause tooth decay"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dental <span className="text-indigo-600">First Aid</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Emergency dental care instructions and preventive tips
          </p>
        </div>

        {/* Emergency Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Emergency Situations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                </div>
                <ol className="space-y-2">
                  {tip.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3 text-gray-700">
                      <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Prevention Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {preventionTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}