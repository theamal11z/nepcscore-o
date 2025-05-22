import React from 'react';
import { BallEvent } from '../types';

interface OverSummary {
  over: number;
  runs: number;
  wickets: number;
  balls: BallEvent[];
}

interface OverByOverChartProps {
  ballByBall: BallEvent[];
  totalOvers: number;
}

const OverByOverChart: React.FC<OverByOverChartProps> = ({ ballByBall, totalOvers }) => {
  // Group ball events by over
  const getOverSummaries = (): OverSummary[] => {
    const overMap: { [key: number]: OverSummary } = {};
    
    // Initialize all overs (including those with no events yet)
    for (let i = 1; i <= totalOvers; i++) {
      overMap[i] = { over: i, runs: 0, wickets: 0, balls: [] };
    }
    
    // Populate with actual data
    ballByBall.forEach(ball => {
      if (!overMap[ball.over]) {
        overMap[ball.over] = { over: ball.over, runs: 0, wickets: 0, balls: [] };
      }
      
      overMap[ball.over].runs += ball.runs;
      if (ball.isWicket) overMap[ball.over].wickets += 1;
      overMap[ball.over].balls.push(ball);
    });
    
    // Convert to array and sort by over number
    return Object.values(overMap).sort((a, b) => a.over - b.over);
  };

  const overSummaries = getOverSummaries();
  
  const getMaxRuns = () => {
    const maxRuns = Math.max(...overSummaries.map(over => over.runs));
    return Math.max(maxRuns, 10); // Ensure we have a reasonable minimum height
  };
  
  const maxRuns = getMaxRuns();
  
  return (
    <div className="w-full">
      <div className="flex items-end space-x-1 mb-4 h-40">
        {overSummaries.map((over) => (
          <div 
            key={over.over} 
            className="flex-1 flex flex-col items-center group relative"
          >
            <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
              <p className="font-medium">Over {over.over}</p>
              <p>{over.runs} runs, {over.wickets} wickets</p>
              {over.balls.length > 0 && (
                <div className="flex space-x-1 mt-1">
                  {over.balls.map((ball, idx) => (
                    <div 
                      key={idx} 
                      className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium
                        ${ball.isWicket ? 'bg-red-600 text-white' : 
                          ball.runs === 4 ? 'bg-[#DC143C] text-white' : 
                          ball.runs === 6 ? 'bg-purple-600 text-white' : 
                          'bg-gray-200 text-gray-700'}`}
                    >
                      {ball.isWicket ? 'W' : ball.runs}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div 
              className={`w-full ${over.wickets > 0 ? 'bg-red-600' : 'bg-[#DC143C]'} rounded-t`}
              style={{ 
                height: `${(over.runs / maxRuns) * 100}%`,
                minHeight: over.runs > 0 ? '10%' : '3%'
              }}
            ></div>
            <div className="text-xs mt-1">{over.over}</div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        <div className="text-sm text-gray-600">Over</div>
        <div className="text-sm text-gray-600">
          Max runs in an over: {Math.max(...overSummaries.map(over => over.runs))}
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium mb-2">Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Most Productive Over */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Most Productive Over</div>
            {overSummaries.length > 0 ? (
              <div className="font-medium">
                Over {overSummaries.reduce((max, over) => over.runs > max.runs ? over : max, overSummaries[0]).over}
                <span className="text-sm text-gray-600 ml-1">
                  ({overSummaries.reduce((max, over) => over.runs > max.runs ? over : max, overSummaries[0]).runs} runs)
                </span>
              </div>
            ) : (
              <div className="text-gray-600">No data</div>
            )}
          </div>
          
          {/* Most Wickets */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Most Wickets in an Over</div>
            {overSummaries.some(over => over.wickets > 0) ? (
              <div className="font-medium">
                Over {overSummaries.reduce((max, over) => over.wickets > max.wickets ? over : max, { over: 0, wickets: 0, runs: 0, balls: [] }).over}
                <span className="text-sm text-gray-600 ml-1">
                  ({overSummaries.reduce((max, over) => over.wickets > max.wickets ? over : max, { over: 0, wickets: 0, runs: 0, balls: [] }).wickets} wickets)
                </span>
              </div>
            ) : (
              <div className="text-gray-600">No wickets yet</div>
            )}
          </div>
          
          {/* Maiden Overs */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Maiden Overs</div>
            {overSummaries.some(over => over.runs === 0 && over.balls.length === 6) ? (
              <div className="font-medium">
                {overSummaries.filter(over => over.runs === 0 && over.balls.length === 6).length}
              </div>
            ) : (
              <div className="text-gray-600">No maidens</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverByOverChart;
