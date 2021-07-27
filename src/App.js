// import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/ComponentC';
import CounterTwo from './components/CounterTwo';
import ErrorBoundary from './components/ErrorBoundary';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import PortalDemo from './components/PortalDemo';
import RefsDemo from './components/RefsDemo';
import User from './components/User';
import { UserProvider } from './components/userContext';
// import { Greet } from './components/Greet'
// import Welcome from './components/Welcome'
// import Apply from './components/Apply'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA'
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';

function App() {
	return (
		<div className="App">
			{/* <UserProvider value="Isah"> You can nest multiple context*/}
			<ComponentC />
			{/* </UserProvider> */}
			{/* <CounterTwo>
        {(count,incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}
      </CounterTwo>
      <CounterTwo>
        {(count,incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}
      </CounterTwo> */}
			{/* <ClickCounterTwo /> */}
			{/* <HoverCounterTwo /> */}
			{/* <User name = {(isLoggedIn) => isLoggedIn ? 'Isah' : 'Guest'}/> */}

			{/* <ClickCounter /> */}
			{/* <HoverCounter /> */}
			{/* <PortalDemo /> */}
			{/* <FRParentInput /> */}
			{/* <FocusInput /> */}
			{/* <RefsDemo /> */}
			{/* <ParentComp /> */}
			{/* <PureComp /> */}
			{/* <Table /> */}
			{/* <FragmentDemo /> */}
			{/* <LifecycleA /> */}
			{/* <Form /> */}
			{/* <h1 className = "error">Error</h1>
      <h1 className = {styles.success}>Success</h1>
      <Inline /> */}
			{/* <Stylesheet /> */}
			{/* <NameList /> */}
			{/* <UserGreeting /> */}
			{/* <ParentComponent /> */}
			{/* <EventBind /> */}
			{/* <FunctionClick />
      <ClassClick /> */}
			{/* <Counter /> */}
			{/* <Greet name="Hammad Ihsaan" heroName = "Superman" >
         <p>Hello I am working damn right</p>
       </Greet>
       <Greet name="Isah Ibrahim" heroName = "Ertugrul" >
         <button>Click me damn</button>
       </Greet>
       <Greet name="Ummisalma Hussein" heroName = "Fuyao" >
          <p>Hey i am lovely and beautiful</p>
       </Greet>
       
       <ErrorBoundary>
        <Hero heroName='Batman' />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Superman' />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary>

       <Welcome name="Hammad Ihsaan" heroName = "Superman" >
         <p>DMN </p>
       </Welcome>
       <Welcome name="Isah Ibrahim" heroName = "Ertugrul" >
         <p>Even me</p>
       </Welcome>
       <Welcome name="Ummisalma Hussein" heroName = "Fuyao">
         <p>forgot</p>
       </Welcome> */}
			{/* <Greet name="Ummisalma Hussein" heroName = "Fuyao" /> */}

			{/* <Apply /> */}

			{/* <Message /> */}
		</div>
	);
}

export default App;
