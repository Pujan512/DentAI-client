"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Calculus } from "@/components/Calculus";
import { Caries } from "@/components/Caries";
import { Gingivitis } from "@/components/Gingivitis";
import { Hyperdontia } from "@/components/Hyperdontia";
import { Hypodontia } from "@/components/Hypodontia";
import { Periodontitis } from "@/components/Periodontitis";

const DentalConditionsGrid = ({ detectedConditions = [] }) => {
  const conditionComponents = {
    'calculus': Calculus,
    'caries': Caries,
    'Gingivitis': Gingivitis,
    'Hypodontia': Hypodontia,
    'Hyperdontia': Hyperdontia,
    'Periodontitis': Periodontitis
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Detected Dental Conditions</h2>
      {detectedConditions.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {detectedConditions.map((condition, index) => {
            const ConditionComponent = conditionComponents[condition];
            return ConditionComponent ? (
              <div key={index} className="animate-fade-in">
                <ConditionComponent />
              </div>
            ) : null;
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-gray-600 text-lg">No dental conditions detected. Your teeth appear healthy!</p>
          <p className="text-gray-500 text-sm mt-2">Continue with your regular oral hygiene routine</p>
        </div>
      )}
    </div>
  );
};

export default function ResultsPage() {
  const [result, setResult] = useState(null);
  const [detectedConditions, setDetectedConditions] = useState([]);
  const [conditionConfidences, setConditionConfidences] = useState({});
  const router = useRouter();

  useEffect(() => {
    const storedResult = localStorage.getItem('analysisResult');
    if (storedResult) {
      const parsedResult = JSON.parse(storedResult);
      setResult(parsedResult);
      
      parseConditionsFromResult(parsedResult.result);
    } else {
      router.push('/');
    }
  }, [router]);

  const parseConditionsFromResult = (apiResult) => {
    const conditions = [];
    const confidences = {};
    
    if (apiResult && apiResult.detections) {
      apiResult.detections.forEach(detection => {
        const conditionName = detection.class;
        const confidence = detection.confidence;
        
        if (confidence > 0.3) {
          if (!confidences[conditionName] || confidence > confidences[conditionName]) {
            confidences[conditionName] = confidence;
          }
          
          if (!conditions.includes(conditionName)) {
            conditions.push(conditionName);
          }
        }
      });
    }
    
    setDetectedConditions(conditions);
    setConditionConfidences(confidences);
  };

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading results...</p>
        </div>
      </div>
    );
  }

  const isHealthy = detectedConditions.length === 0;
  const apiResult = result.result || {};
  const processedImage = apiResult.image;

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">Analysis Results</h1>
              <p className="text-gray-600 mt-2">
                Analyzed on {new Date(result.timestamp).toLocaleDateString()} at{' '}
                {new Date(result.timestamp).toLocaleTimeString()}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/')}
                className="cursor-pointer px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                New Analysis
              </button>
            </div>
          </div>

          {/* Status Card */}
          <div className={`border rounded-lg p-4 ${isHealthy ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isHealthy ? 'bg-green-100' : 'bg-red-100'}`}>
                {isHealthy ? (
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {isHealthy ? 'No Dental Issues Detected' : 'Dental Conditions Detected'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isHealthy 
                    ? 'Your oral health appears to be in good condition.' 
                    : ``
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Detection Summary */}
          {!isHealthy && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {detectedConditions.map(condition => (
                <div key={condition} className="bg-white border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 capitalize">{condition}</span>
                    <span className="text-sm font-semibold text-blue-600">
                      {(conditionConfidences[condition] * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${conditionConfidences[condition] * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Processed Image */}
        {processedImage && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Processed Image Analysis</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis Result</h3>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <img
                    alt="Processed result"
                    src={`data:image/jpeg;base64,${processedImage}`}
                    className="w-full h-auto rounded-lg max-h-96 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Detection Details</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Analysis Summary</h4>
                    <p className="text-gray-600 text-sm">
                      {isHealthy 
                        ? 'The AI analysis indicates healthy oral tissues with no signs of common dental conditions.'
                        : `AI detected ${apiResult.detections?.length || 0} potential areas of concern across ${detectedConditions.length} condition types.`
                      }
                    </p>
                  </div>
                  
                  {!isHealthy && (
                    <>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-medium text-yellow-900 mb-2">Important Notice</h4>
                        <p className="text-yellow-800 text-sm">
                          This analysis is based on AI detection and should be verified by a dental professional.
                          Multiple detections may indicate areas requiring closer examination.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detected Conditions */}
        {!isHealthy ? (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <DentalConditionsGrid detectedConditions={detectedConditions} />
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Oral Health Status</h2>
            <div className="text-center py-12 bg-green-50 rounded-lg">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Excellent Oral Health!</h3>
              <p className="text-green-700 max-w-2xl mx-auto">
                No dental conditions were detected in your analysis. Continue with your current oral hygiene practices.
              </p>
            </div>
          </div>
        )}

        {/* General Recommendations */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isHealthy ? 'Maintenance Recommendations' : 'Treatment Recommendations'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Oral Hygiene</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Brush teeth twice daily with fluoride toothpaste</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Floss daily to remove plaque between teeth</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Use antibacterial mouthwash if recommended</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Schedule regular dental check-ups every 6 months</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional cleaning to remove tartar buildup</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consult dentist for any persistent issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">Medical Disclaimer</h4>
              <p className="text-yellow-800 text-sm">
                This AI-powered analysis is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a dental or medical condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}