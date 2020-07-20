import React, { ReactElement } from 'react';
import HeadingContainer from '../HeadingContainer';
import OptionButton from '../../../SideNav/Options/OptionButton';
import { AddIcon } from '../../../SideNav/Options/OptionIcons';
import ContextTile from '../../../common/ContextMenu/ContextTile';
import ContextMenu from '../../../common/ContextMenu/ContextMenu';


const AddNoteTut: React.FC = (): ReactElement => {

    return (
        <div>

            <HeadingContainer >
                <h1>Add Node</h1>
                <h4>Right click on the canvas to add node at that position OR add node from the tool menu</h4>
            </HeadingContainer>
            <div style={{ left: -150, top: 50, position: "absolute" }}>
                <div style={{ position: "absolute" }}>

                    <OptionButton
                        tooltipContent="Add node"
                        onClick={() => { }}
                    >
                        <AddIcon></AddIcon>
                    </OptionButton>
                </div>
            </div >
            <ContextMenu
                isVisible={true}
                position={{ top: 36, left: 0 }}
                setIsVisible={(val: boolean) => {
                }}
                canvasRef={React.createRef<HTMLDivElement>()}
            >
                <ContextTile>
                    Add node</ContextTile>
                <ContextTile>Clear canvas</ContextTile>
            </ContextMenu>
        </div>
    );
}


export default AddNoteTut;