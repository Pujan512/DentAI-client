export const Periodontitis = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
          <span className="text-2xl">
            <img src="./Images/Periodontosis.png" />
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Periodontitis</h3>
          <p className="text-gray-600 text-sm mt-1">Advanced gum disease affecting bone</p>
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
              <span>Swollen, bright red gums</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Gums that bleed easily</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Pus between teeth and gums</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Loose teeth or tooth loss</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Painful chewing</span>
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
              <span>Scaling and root planing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Antibiotic treatments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Flap surgery (pocket reduction)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Bone and tissue grafts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Professional maintenance</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Severity: High</span>
          <span className="text-orange-600 font-medium">Immediate Treatment</span>
        </div>
      </div>
    </div>
  );
};