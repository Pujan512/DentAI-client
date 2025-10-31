export default function About() {
  const commonConditions = [
    {
      name: "Calculus (Tartar)",
      description:
        "Detection of hardened dental plaque and tartar buildup on teeth",
      icon: "./Images/Calculus.png",
      details:
        "Identifies calcified deposits that require professional cleaning",
    },
    {
      name: "Caries (Tooth Decay)",
      description:
        "Identification of cavities, tooth decay, and carious lesions",
      icon: "./Images/Caries.png",
      details: "Early detection of demineralization and cavity formation",
    },
    {
      name: "Gingivitis",
      description:
        "Detection of gum inflammation and early-stage periodontal disease",
      icon: "./Images/Gingivitis.png",
      details: "Identifies swollen, bleeding gums and gum inflammation",
    },
    {
      name: "Hypodontia",
      description:
        "Identification of congenitally missing teeth and dental anomalies",
      icon: "./Images/Hypodontia.png",
      details: "Detects gaps and missing teeth from developmental issues",
    },
    {
      name: "Hyperdontia",
      description: "Detection of extra teeth and supernumerary dental elements",
      icon: "./Images/Hyperdontia.png",
      details: "Identifies additional teeth beyond normal dental formula",
    },
    {
      name: "Periodontitis",
      description:
        "Advanced gum disease detection with bone and tissue involvement",
      icon: "./Images/Periodontitis.png",
      details: "Identifies severe gum infection damaging soft tissue and bone",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-indigo-600">DentAI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionizing oral healthcare through artificial intelligence
              and advanced technology
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Our Mission
            </h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                DentAI is an innovative platform that leverages cutting-edge
                artificial intelligence to make dental health monitoring
                accessible, convenient, and proactive for everyone. Our mission
                is to bridge the gap between routine dental check-ups by
                providing instant, reliable oral health assessments that empower
                individuals to take control of their dental wellness.
              </p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Advanced AI Technology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Machine Learning
                </h3>
                <p className="text-gray-700">
                  Our AI model is trained on thousands of dental images using
                  state-of-the-art computer vision algorithms to accurately
                  identify dental conditions with high precision.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Real-time Analysis
                </h3>
                <p className="text-gray-700">
                  Get instant results with our optimized processing pipeline
                  that analyzes dental images in seconds, providing detailed
                  insights and recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Common Conditions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Conditions We Can <span className="text-indigo-600">Detect</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl">
              Our advanced AI system is specifically trained to identify these
              common dental conditions, providing you with valuable insights
              about your oral health status.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonConditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img src={condition.icon}  width={50}/>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {condition.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {condition.description}
                  </p>
                  <p className="text-gray-500 text-sm">{condition.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Important Medical Disclaimer
                </h3>
                <p className="text-yellow-700">
                  DentAI is designed for preliminary assessment and educational
                  purposes only. It is not a substitute for professional dental
                  diagnosis, treatment, or medical advice. Always consult with a
                  qualified dental professional for accurate diagnosis and
                  treatment. The information provided by DentAI should be used
                  as a supplementary tool and not as the sole basis for making
                  healthcare decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
