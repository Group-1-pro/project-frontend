import React from 'react';


const VisaDb = (distination) => {
    console.log(distination)
    console.log(distination.distination.location)

    return (
        <div>
            <script src="https://visadb.io/embedjs/v1.js"></script>

            <iframe
                src={`https://visadb.io/visawidget/journey/Jordan/${distination.distination.location}`}
                className="w-full h-[600px]"
                allow="geolocation; encrypted-media"
                referrerpolicy="origin"
                title="VisaDB Widget"
            >
            </iframe>


        </div>
    );
}

export default VisaDb;