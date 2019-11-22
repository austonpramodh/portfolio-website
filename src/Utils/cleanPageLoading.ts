import { PageLoadingId, PageLoadingStyleId } from "../Components/PageLoading";

const cleanDom = () => {
    const pageLoadingDiv = document.getElementById(PageLoadingId);
    if (pageLoadingDiv) pageLoadingDiv.remove();
    const pageLoadingStyleId = document.getElementById(PageLoadingStyleId);
    if (pageLoadingStyleId) pageLoadingStyleId.remove();
};
export default cleanDom;
