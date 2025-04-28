import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    paste_bot: localStorage.getItem("paste_bot")
        ? JSON.parse(localStorage.getItem("paste_bot"))
        : []
}

export const PasteSlice = createSlice({
    name: "Paste_bot",
    initialState,
    reducers: {
        addToPaste: (state, action) => {
            const paste = action.payload;
            //add a check=?Paste already exist
            const correctpaste = state.paste_bot.filter((p) => p.title.toLowerCase() === paste.title.toLowerCase())
            if (correctpaste.length == 0 && paste.content.trim() !== "" && paste.title.trim() !== '') {
                state.paste_bot.push(paste);
                localStorage.setItem("paste_bot", JSON.stringify(state.paste_bot));
                toast.success("Paste Created Succcessfully");
            }
            else {
                //add check paste is empty or not
                if (paste.content.trim() === "" || paste.title.trim() === '') toast.error("Paste is empty");
                else toast.error("Paste is already exist");
            }


        },
        updateToPaste: (state, action) => {
            const paste = action.payload;
            const index = state.paste_bot.findIndex((item) => item._id === paste._id);
            if (index >= 0) {
                paste.fav = state.paste_bot[index].fav;
                state.paste_bot[index] = paste;
                localStorage.setItem("paste_bot", JSON.stringify(state.paste_bot));
                toast.success("Paste updated");
            }

        },
        resetAllPaste: (state, action) => {
            state.paste_bot = [];
            localStorage.removeItem("paste_bot");
            toast.success("Reset");


        },
        removeFromPaste: (state, action) => {
            const pasteId = action.payload;
            const index = state.paste_bot.findIndex((item) => item._id === pasteId);
            if (index >= 0) {
                state.paste_bot.splice(index, 1);
                localStorage.setItem("paste_bot", JSON.stringify(state.paste_bot));
                toast.success("Paste Deleted");
            }

        },
        changefav: (state, action) => {
            const id = action.payload;
            console.log("fun", id);
            const index = state.paste_bot.findIndex((item) => item._id === id);
            if (index >= 0) {
                state.paste_bot[index].fav = !(state.paste_bot[index].fav);
                console.log(state.paste_bot[index].fav);
                localStorage.setItem("paste_bot", JSON.stringify(state.paste_bot));
                toast.success("favourites are change");
            }
        }

    }
})

export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste, changefav } = PasteSlice.actions
export default PasteSlice.reducer;