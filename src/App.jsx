import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/style';
import Layout from './common/Layout';
import { NotFiles, Main } from './pages';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                </Route>
                <Route path="*" element={<NotFiles />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
