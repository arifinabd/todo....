import React from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { getTodo } from '../../store/actions/todo';



const List = (props) => {
  // props.getTodo();

  const { match, history } = useRouter();

  const onClickGetButton = (id) => () => {
    history.push(`/todo/${id}`);
  };

  const onClickEditButton = (id) => {
    history.push(`/todo/${id}/update`);
  };
  console.log(props)
  return (
    <div>
      List Todo Page
      {
        props.todos.map(element => 
          (
            <div key={element.id}>
              <label>{element.id}</label>
              <label>{element.name}</label>
              <label>{element.description}</label>
              <div>
                <button type="button" onClick={onClickGetButton(element.id)}>Get</button>
                {/* <button type="button" onClick={onClickEditButton(element.id)}>Edit</button> */}
              </div>
            </div>
          ))
      }

      <button onClick={() => props.getTodos()}>
        Get Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodo()),
  }
};
// export default List
export default connect(mapStateToProps, mapDispatchToProps)(List);