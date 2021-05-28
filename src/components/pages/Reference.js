import React from "react";
// import Header from "../Header";
// import Layout from "../Layout";
// import Footer from "../Footer";
// import WrapTitle from "../basics/WrapTitle";
// import { Link } from "react-router-dom";

// function ReferText({alpha, attr, desc}) {
//     return (
//         <li>
//             <Link to="/">
//                 <span className="alpha">{alpha}</span>
//                 <span className="attr">{attr}</span>
//                 <span className="desc">{desc}</span>
//             </Link>
//         </li>
//     );
// }

// const referAttr = [
//     {
//         alpha: "A",
//         attr: "align-content",
//         desc: "align-content 속성은 플렉스 아이템의 상하 정렬을 설정합니다."
//     },
//     {
//         alpha: "",
//         attr: "animation",
//         desc: "animation 속성은 애니메이션을 설정합니다.",
//     },
//     {
//         alpha: "",
//         attr: "animation-delay",
//         desc: "animation-delay 속성은 요소가 로드된 후 애니메이션이 시작될 때 까지의 시간을 나타냅니다.",
//     },
//     {
//         alpha: "",
//         attr: "animation-direction",
//         desc: "animation-direction 속성은 애니메이션 움직임 방향을 설정합니다.",
//     },
//     {
//         alpha: "",
//         attr: "animation-duration",
//         desc: "animation-duration 속성은 애니메이션 움직임 시간을 설정합니다.",
//     }
// ];



// function Reference() {
//     return (
//         <div id="wrap" className="light">
//             <Header info="none"/>
//             <Layout>
//                 <section id="referCont">
//                     <div className="container">
//                         <WrapTitle text={["HTML", "reference"]} />
//                         <div className="refer-cont">
//                             <div className="refer-table">
//                                 <h3>CSS REFERENCE</h3>
//                                 <ul>
//                                     {referAttr.map((text) => (
//                                         <ReferText 
//                                         key={text.attr}
//                                         alpha={text.alpha}
//                                         attr={text.attr}
//                                         desc={text.desc}
//                                         />
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//             <Footer />
//         </div>
//     );
// }





class Reference extends React.Component {
    state = {
        isLoading: true,
    };
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }

    render(){
        const { isLoading } = this.state;               // 괄호 안은 true값 존재
        return <div>{ isLoading ? "로딩중" : "준비되었습니다." }</div>;
    }
}

export default Reference;