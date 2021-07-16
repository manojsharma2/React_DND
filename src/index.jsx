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
        id: 1, name: 'marketWatch', content: <GalleryCard
            name={'1'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${0}`}
            itemIndex={0}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 2, name: 'marketWatch', content: <GalleryCard
            name={'2'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${1}`}
            itemIndex={1}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 3, name: 'marketWatch', content: <GalleryCard
            name={'3'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${2}`}
            itemIndex={2}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 4, name: 'marketWatch', content: <GalleryCard
            name={'4'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${3}`}
            itemIndex={3}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 5, name: 'marketWatch', content: <GalleryCard
            name={'5'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${4}`}
            itemIndex={4}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 6, name: 'marketWatch', content: <GalleryCard
            name={'6'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${5}`}
            itemIndex={5}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 7, name: 'marketWatch', content: <GalleryCard
            name={'7'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${6}`}
            itemIndex={6}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 8, name: 'marketWatch', content: <GalleryCard
            name={'8'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${7}`}
            itemIndex={7}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 9, name: 'marketWatch', content: <GalleryCard
            name={'9'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${8}`}
            itemIndex={8}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 10, name: 'marketWatch', content: <GalleryCard
            name={'10'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${9}`}
            itemIndex={9}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 11, name: 'marketWatch', content: <GalleryCard
            name={'11'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${10}`}
            itemIndex={10}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 12, name: 'marketWatch', content: <GalleryCard
            name={'12'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${11}`}
            itemIndex={11}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 13, name: 'marketWatch', content: <GalleryCard
            name={'13'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${12}`}
            itemIndex={12}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 14, name: 'marketWatch', content: <GalleryCard
            name={'14'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${13}`}
            itemIndex={13}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 15, name: 'marketWatch', content: <GalleryCard
            name={'15'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${14}`}
            itemIndex={14}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 16, name: 'marketWatch', content: <GalleryCard
            name={'16'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${15}`}
            itemIndex={15}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 17, name: 'marketWatch', content: <GalleryCard
            name={'17'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${16}`}
            itemIndex={16}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 18, name: 'marketWatch', content: <GalleryCard
            name={'18'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${17}`}
            itemIndex={17}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 19, name: 'marketWatch', content: <GalleryCard
            name={'19'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${18}`}
            itemIndex={18}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 20, name: 'marketWatch', content: <GalleryCard
            name={'20'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${19}`}
            itemIndex={19}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 21, name: 'marketWatch', content: <GalleryCard
            name={'21'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${20}`}
            itemIndex={20}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 22, name: 'marketWatch', content: <GalleryCard
            name={'22'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${21}`}
            itemIndex={21}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 23, name: 'marketWatch', content: <GalleryCard
            name={'23'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${22}`}
            itemIndex={22}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 24, name: 'marketWatch', content: <GalleryCard
            name={'24'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${23}`}
            itemIndex={23}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 25, name: 'marketWatch', content: <GalleryCard
            name={'25'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${24}`}
            itemIndex={24}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 26, name: 'marketWatch', content: <GalleryCard
            name={'26'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${25}`}
            itemIndex={25}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 27, name: 'marketWatch', content: <GalleryCard
            name={'27'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${26}`}
            itemIndex={26}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 28, name: 'marketWatch', content: <GalleryCard
            name={'28'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${27}`}
            itemIndex={27}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 29, name: 'marketWatch', content: <GalleryCard
            name={'29'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${28}`}
            itemIndex={28}
            mediaHeight={"250px"}
        />,
    },
    {
        id: 30, name: 'marketWatch', content: <GalleryCard
            name={'30'}
            description={'hasdjkhasdhas lksdakljdasd'}
            media={`https://picsum.photos/1920/1080?random=${29}`}
            itemIndex={29}
            mediaHeight={"250px"}
        />,
    },
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
        return <div data-item-type={itemType} className="preview" style={style}>{$Content ? <>
            {$Content}
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
            const newDat = data.slice(cards.length, cards.length + 30);
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
