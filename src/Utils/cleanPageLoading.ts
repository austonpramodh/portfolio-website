import { PageLoadingId } from "../Components/PageLoading";

const cleanDom = () => {
    const pageLoadingDiv = document.getElementById(PageLoadingId);

    if (pageLoadingDiv) pageLoadingDiv.remove();
};
export default cleanDom;
