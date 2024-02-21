var config = {
     //style: 'mapbox://styles/megamap/clshsj7tn01b701qqa6rrfdxk',
    //accessToken: 'pk.eyJ1IjoibWVnYW1hcCIsImEiOiJjbGFhcW9sNmIwOThqM29vM3FzcDJxOGdzIn0.pjn5vZ2JD3g2_6H35DPauA',
    //style: 'mapbox://styles/megamap/clsiu3ia501vu01pe6vnyfagr',
    //accessToken: 'pk.eyJ1IjoibWVnYW1hcCIsImEiOiJjbGFhcW9sNmIwOThqM29vM3FzcDJxOGdzIn0.pjn5vZ2JD3g2_6H35DPauA',
    style: 'mapbox://styles/megamap/clshsj7tn01b701qqa6rrfdxk',
    accessToken: 'pk.eyJ1IjoibWVnYW1hcCIsImEiOiJjbGFhcW9sNmIwOThqM29vM3FzcDJxOGdzIn0.pjn5vZ2JD3g2_6H35DPauA',
    
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,

    // title: 'Troubled Waters',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            //showMarkers: false ,
            //showMarkers: true,
            //markerColor: '#FFB1CE',
            markerOpacity: 0,
            location: {
                center: [-30,28],
                zoom: 1.4,
                pitch: 0,
                bearing: 0,
                

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'country-boundaries',
                    opacity: 0,
                    duration: 0
                },
                 {
                    layer: 'country-boundaries copy',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'February 2022: Ukraine-Russia War',
            image: './uk.jpg',
            description: 'Ukraine was a member of the Soviet Union until 1991 when it disintegrated, and Russia has tried to maintain the country in its orbit since then. Russia invaded Ukraine in an escalation of the Russo-Ukrainian War that started in 2014. Russia further gained a maritime advantage in the region due to its invasion and annexation of Crimea. This affected the shipping trade in the Black sea.',
            location: {
                center: [31.1656, 48.3794],
                zoom: 5.5,
                pitch: 60,
                bearing: 30.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'country-boundaries',
                    opacity: 1,
                    duration: 2000
                }
                ],
            onChapterExit: [
                {
                    layer: 'country-boundaries',
                    opacity: 0,
                    duration: 2000
                }
                ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Geopolitical tensions affecting shipping in the Black Sea',
            image: './war.gif',
            description: 'The war has caused significant changes in port call patterns in Ukraine and the Black Sea region. While Ukrainian port calls fell, they increased in Romania and Bulgaria as Ukrainian traders were seeking alternative viable routes. In addition, the halt of operations at Black Sea ports resulted in an important shift: rivers became the main artery of Ukrainian trade. Before the war, more than 90 per cent of ships departed from seaports. Following the invasion, this share dropped to 20 per cent. However, this increased reliance on river ports came with constraints as it could not handle large ships.  ',
            location: {
                center: [34.299316, 43.413029],
                zoom: 5.5,
                pitch: 60,
                bearing: -3.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thir-identifier',
            alignment: 'left',
            hidden: false,
            title: ' The Black Sea Grain Initiative ',
            image: './grain.jpg',
            description: 'The conflict in Ukraine, combined with international sanctions against Russian grain and fertilizer exports, has affected global food supply chains, dealing a crippling blow to global food security. Russia and Ukraine are major global suppliers of grains and edible oils.The prospect of the Black Sea Grain Initiative and the reopening of the Black Sea ports helped to push down historically high market prices. However, prices have begun to rise again amid mounting concerns about whether the BSGI will be renewed, and the threat of further disruptions to trade in the Black Sea and the closure of grain corridors. Without The Initiative, there is little hope for providing food security, especially for developing and least developed countries.',
            location: {
                center: [34.299316, 43.413029],
                zoom: 5.5,
                pitch: 60,
                bearing: -3.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
{
                    layer: 'country-boundaries',
                    opacity: 1,
                    duration: 2000
                }
                ],
            onChapterExit: [
 {
                    layer: 'country-boundaries',
                    opacity: 0,
                    duration: 2000
                }
                ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'April 2023: Drought saps the Panama Canal',
            image: './panama2.jpg',
            description: 'The Panama Canal is facing a severe drought, with water levels in the canal at their lowest in decades. The decreased water level in the canal is attributable to the reduction in rainfall in Panama, the area surrounding the canal is currently witnessing one of the two driest years in Panama’s recorded history. It is estimated that water levels in the Gatun Lake, which feeds the canal, have reduced by almost 10 feet when compared against the usual water levels during this period. ',
            location: {
                center: [-79.680000, 9.090000],
                zoom: 6,
                pitch: -20.01,
                bearing: -25.00,
                speed: 0.85,
                //curve: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'country-boundaries',
                    opacity: 1,
                    duration: 2000
                }
                ],
            onChapterExit: [
                {
                    layer: 'country-boundaries',
                    opacity: 1,
                    duration: 2000
                }
                ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Panama Canal cuts half of Vessel Traffic',
            image: './Panama_Canal.gif', 
            description: 'Prior to these restrictions, an average of about 36 vessels per day moved through the canal.The Panama Canal Authority (ACP) announced that transits will be limited to 24 slots per day. Reducing the volume of canal transits by about one-third will reshape seaborne trade flows. Roughly 100 million tons of cargo (equal to about 35 percent of the cargo that traversed the canal in 2022) could be affected. ',
            location: {
                center: [-79.680000, 9.090000],
                zoom: 6,
                pitch: -20.01,
                bearing: -25.00,
                speed: 0.85,
                //curve: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'country-boundaries',
                    opacity: 0,
                    duration: 2000
                }
                ],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'November 2023: Where Ships Are Being Targeted by Houthis',
            image: './houthi.gif',
            description: 'Beginning in November 2023, the Houthis launched indiscriminate attacks on commercial ships traversing the Bab al-Mandab Strait, a crucial 20-mile-wide chokepoint for maritime traffic entering and exiting the Red Sea in its South.',
            location: {
                center: [43.5607, 12.4970],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
{
                    layer: 'country-boundaries',
                    opacity: 1,
                    duration: 2000
                }
                ],
            onChapterExit: [
{
                    layer: 'country-boundaries copy',
                    opacity: 0,
                    duration: 2000
                }
                ]
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Why are the Houthis attacking ships in the Red Sea?',
            image: './gaza.gif',
            description: 'The Houthi rebel group has attacked dozens of commercial ships in the Red Sea, with no signs of slowing down. The Houthis say their strikes are directed at boats with Israeli interests, and that the attacks will continue until Israel ends its war in Gaza. But in practice, the Houthis have targeted ships indiscriminately.',
            location: {
                center: [34.4668, 31.5017],
                zoom: 6,
                pitch: -20,
                speed: 0.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'country-boundaries copy',
                    opacity: 1,
                    duration: 2000
                }
                ],
            onChapterExit: []
        },
                {
            id: 'eigth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ships avoid Suez Canal as fear of Houthi attacks lingers',
            image: './attack.png',
            description: 'The Suez Canal, a critical waterway connecting the Mediterranean Sea to the Red Sea, handled approximately 12% to 15% of global trade in 2023. UNCTAD estimates that the trade volume going through the Suez Canal decreased by 42% over the last few months since the route is via the Red Sea.',
            location: {
                center: [37.92000, 20.63000],
                zoom: 4,
                pitch: -20,
                speed: 0.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'country-boundaries copy',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'country-boundaries',
                    opacity: 1,
                    duration: 2000
                }
                ],
            onChapterExit: [
{
                    layer: 'country-boundaries',
                    opacity: 0,
                    duration: 2000
                }
                ]
        }
    ]
};
