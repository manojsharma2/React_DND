import { render } from "react-dom";
import Example from "./example";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import MultiBackend, { DndProvider, TouchTransition, MouseTransition, Preview } from 'react-dnd-multi-backend';
import React, { useCallback, useState, useEffect} from "react";
import update from "immutability-helper";
import './index.css'
import GalleryCard from './GalleryCard'
const data = [
    {
        id: 1, name: 'marketWatch', content: {
            profileName: "1",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 2, name: 'marketWatch', content: {
            profileName: "2",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 3, name: 'marketWatch', content: {
            profileName: "3",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 4, name: 'marketWatch', content: {
            profileName: "4",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 5, name: 'marketWatch', content: {
            profileName: "5",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 6, name: 'marketWatch', content: {
            profileName: "6",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 7, name: 'marketWatch', content: {
            profileName: "7",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 8, name: 'marketWatch', content: {
            profileName: "8",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 9, name: 'marketWatch', content: {
            profileName: "9",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 10, name: 'marketWatch', content: {
            profileName: "10",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 11, name: 'marketWatch', content: {
            profileName: "11",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 12, name: 'marketWatch', content: {
            profileName: "12",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 13, name: 'marketWatch', content: {
            profileName: "13",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 14, name: 'marketWatch', content: {
            profileName: "14",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 15, name: 'marketWatch', content: {
            profileName: "15",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 16, name: 'marketWatch', content: {
            profileName: "16",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 17, name: 'marketWatch', content: {
            profileName: "17",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 18, name: 'marketWatch', content: {
            profileName: "18",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 19, name: 'marketWatch', content: {
            profileName: "19",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 20, name: 'marketWatch', content: {
            profileName: "20",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 21, name: 'marketWatch', content: {
            profileName: "21",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 22, name: 'marketWatch', content: {
            profileName: "22",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 23, name: 'marketWatch', content: {
            profileName: "23",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 24, name: 'marketWatch', content: {
            profileName: "24",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 25, name: 'marketWatch', content: {
            profileName: "25",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 26, name: 'marketWatch', content: {
            profileName: "26",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 27, name: 'marketWatch', content: {
            profileName: "27",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 28, name: 'marketWatch', content: {
            profileName: "28",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 29, name: 'marketWatch', content: {
            profileName: "29",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 30, name: 'marketWatch', content: {
            profileName: "30",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 31, name: 'marketWatch', content: {
            profileName: "31",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 32, name: 'marketWatch', content: {
            profileName: "32",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 33, name: 'marketWatch', content: {
            profileName: "33",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 34, name: 'marketWatch', content: {
            profileName: "34",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 35, name: 'marketWatch', content: {
            profileName: "35",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }, {
        id: 36, name: 'marketWatch', content: {
            profileName: "36",
            profileImage: "https://picsum.photos/1920/1080",
            personDetails: "Working as Front End Developer at TPG."
        },
    }
];
const HTML5toTouch = {
    backends: [
        { // React dnd backend for desktop and there options
            backend: HTML5Backend,
            preview: true,
            transition: MouseTransition,
            options: { enableMouseEvents: true },
            skipDispatchOnTransition: true
        },
        { // React dnd backend for touch devices and there options
            backend: TouchBackend,
            options: { enableMouseEvents: true },
            preview: true,
            transition: TouchTransition,
            skipDispatchOnTransition: true
        }
    ]
};
function App() {
    const [cards, setCards] = useState([])
    const [isFetching, setIsFetching] = useState(true);
    // This function generate preview for item which is dragging
    // This function generate preview for item which is dragging
    const generatePreview = ({ itemType, item, style }) => {
        const newID = parseInt(item.index);
        const $Content = cards[newID].content
        return <div data-item-type={itemType} className="preview" style={style}>{cards[newID].content ? <>
            <GalleryCard
                name={$Content.profileName}
                description={$Content.personDetails}
                media={`${$Content.profileImage}?random=${item.id}`}
                key={item.index}
                itemIndex={item.index}
                mediaHeight={item.index === 0 ? "250px" : "250px"}
            />
        </> : null}</div>
    };
    const moveCard = useCallback(
        (dragIndex ,hoverIndex) => {
            const dragCard = cards[dragIndex];
            setCards(
                update(cards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard]
                    ]
                })
            );
        },
        [cards]
    );
    const fetchListItems = () => {
        setTimeout(() => {
            if (cards.length >= data.length) {
                setIsFetching(false);
                return;
            }
            const newDat = data.slice(cards.length, cards.length + 12);
            console.log('newDat', newDat)
            setCards((prevState) => [...prevState, ...newDat]);
            setIsFetching(false);
        }, 1000);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight
            )
                return;
            setIsFetching(true);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        if (!isFetching) return;
        fetchListItems();
    }, [isFetching]);
    return (
     <DndProvider backend={MultiBackend} options={HTML5toTouch}>
         {
             cards && cards.length > 0 ? (
                 <div id="reactDnd" className="reactDnd">
                     <Preview generator={generatePreview} />
                     <Example
                         cards={cards}
                         moveCard={moveCard}
                        />
                        {isFetching && (
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: "0px",
                                    left: "0px",
                                    right: "0px",
                                    width: "100%",
                                    padding: "8px",
                                    fontSize: "1.4rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    background: "#000"
                                }}
                            >
                                is Loading
                            </div>
                        )}
                 </div>
             ) : null
         }
     </DndProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
