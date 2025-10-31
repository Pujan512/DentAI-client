export const Caries = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
          <span className="text-2xl">
            <img src="./Images/Caries.png" />
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Caries (Tooth Decay)</h3>
          <p className="text-gray-600 text-sm mt-1">Bacterial damage causing cavities</p>
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
              <span>Toothache or spontaneous pain</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Sensitivity to hot, cold, or sweet</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Visible holes or pits in teeth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Brown, black, or white staining</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Pain when biting down</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h4 className="font-semibold text-gray-900">Treatment & Prevention</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Dental fillings for cavities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Root canal for severe decay</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Fluoride treatments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Reduce sugar intake</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Regular brushing with fluoride</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Severity: High</span>
          <span className="text-red-600 font-medium">Immediate Attention Needed</span>
        </div>
      </div>
    </div>
  );
};