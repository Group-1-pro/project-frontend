import React, { useEffect } from 'react';

const VisaDb = (destination) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://visadb.io/embedjs/v1.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <iframe
                src={`https://visadb.io/visawidget/journey/Jordan/${destination.distination.location}`}
                className="w-full h-[600px] flex items-center justify-center"
                allow="geolocation; encrypted-media"
                referrerpolicy="origin"
                title="VisaDB Widget"
            />
        </div>
    );
}

export default VisaDb;
