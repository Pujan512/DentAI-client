export const Hyperdontia = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
          <span className="text-2xl">
            <img src="./Images/Hyperdontia.png" />
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Hyperdontia (Extra Teeth)</h3>
          <p className="text-gray-600 text-sm mt-1">Supernumerary teeth beyond normal count</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <h4 className="font-semibold text-gray-900">Symptoms</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Extra teeth (supernumerary teeth)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Crowding of teeth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Impacted teeth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Malocclusion (misaligned bite)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Tooth displacement</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h4 className="font-semibold text-gray-900">Treatment & Management</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Surgical removal of extra teeth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Orthodontic treatment for alignment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Regular dental X-rays for monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Space management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Early intervention in children</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Severity: Moderate</span>
          <span className="text-purple-600 font-medium">Surgical Consultation</span>
        </div>
      </div>
    </div>
  );
};