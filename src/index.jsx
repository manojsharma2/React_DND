import { render } from "react-dom";
import Example from "./example";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import MultiBackend, { DndProvider, TouchTransition, MouseTransition, Preview } from 'react-dnd-multi-backend';
import React, {useCallback, useState} from "react";
import update from "immutability-helper";
import './index.css'

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
    const [cards,setCards]=useState([
        { id: 1, name: 'marketWatch', content: <div
                style={{
                    width: 'auto',
                    height: 'auto',
                    marginLeft: '8px',
                    overflow: 'hidden',
                    display: 'inline-block',
                }}>
                <img
                    style={{width: '100%'}}
                    src={`https://homepages.cae.wisc.edu/~ece533/images/airplane.png`}
                    alt={`b_img`}
                />
            </div> },
        { id: 2, name: 'hotsheets', content: <div
                style={{
                    width: 'auto',
                    height: 'auto',
                    marginLeft: '8px',
                    overflow: 'hidden',
                    display: 'inline-block',
                }}>
                <img
                    style={{width: '100%'}}
                    src={`https://homepages.cae.wisc.edu/~ece533/images/frymire.png`}
                    alt={`c_img`}
                />
            </div> },
        { id: 3, name: 'concierge', content: <div
                style={{
                    width: 'auto',
                    height: 'auto',
                    marginLeft: '8px',
                    overflow: 'hidden',
                    display: 'inline-block',
                }}>
                <img
                    style={{width: '100%'}}
                    src={`https://homepages.cae.wisc.edu/~ece533/images/peppers.png`}
                    alt={`d_img`}
                />
            </div> }
    ])
    // This function generate preview for item which is dragging
    // This function generate preview for item which is dragging
    const generatePreview = ({ itemType, item, style }) => {
        const newID = parseInt(item.index);
        return <div data-item-type={itemType} className="preview" style={style}>{cards[newID].content ? cards[newID].content : null}</div>
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
                 </div>
             ) : null
         }
     </DndProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
