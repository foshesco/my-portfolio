import React from 'react';
import './loading.css';

const Loading = () => {

    return (
        <div className="loadingContainer">
            <div class="single-chart">
                <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" class="shape">
                    <defs>
                        <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
                            <stop offset="0%" stop-color="var(--color-stop)" />
                            <stop offset="30%" stop-color="var(--color-stop)" />
                            <stop offset="100%" stop-color="var(--color-bot)" />
                        </linearGradient>
                    </defs>

                    <path class="circle gradient-bg"
                        stroke-dasharray="100"
                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                </svg>
                <div className="loadingText"><span class="percentage">e</span></div>
            </div>
        </div>
    );
}

export default Loading;