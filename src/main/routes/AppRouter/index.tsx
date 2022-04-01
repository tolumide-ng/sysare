import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, } from "react-router";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { Search } from "../../components/Pages/SearchPage";
import { LoadingPage } from "../../components/Pages/LoadingPage";
import { setDropDownAction } from "../../store/modules/dropDown/actions";
import { IRootState } from "../../store/modules/types";
import "./index.css";

const AppRouter = () => {
    const dispatch = useDispatch();

    const dropDownSelector = useSelector(
        (state: IRootState) => state.dropDownReducer
    );

    const handleCloseDropDown = () => {
        if (dropDownSelector.display) {
            dispatch(setDropDownAction(true));
        }
    };

    return (
        <div className="appwide" onClick={handleCloseDropDown}>
            <main className="appwide-container">
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage />}>
                        <Routes>
                            <Route path="/:search" element={<Search />} />
                            {/* <Route path="/" /> */}
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default AppRouter;
