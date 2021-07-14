import {useEffect} from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { deleteTodo } from '../../store/actions/todo';

const Delete = (props) => {
  const { getTodoDeleteById } = props;
  const { match, history } = useRouter();

  useEffect(() => {
    getTodoDeleteById(match.params.id);
  }, [getTodoDeleteById, match.params.id])
  // const onCancel = () => {
  //   history.push('/')
  // }
  // const onDelete = () => {
  //   getTodoDeleteById(match.params.id)
  //   history.push('/')
  // }

  return(
    <div>
      {JSON.stringify(props.todo)}
      Delete Todo Page
      {/* <button onClick={onDelete}>Hapus</button> */}
      {/* <button onClick={onCancel}>Cancel</button> */}
    </div>
  )  
};

const mapStateToProps = (state) => ({
  todo: state.todoReducer.todo
});

const mapDispatchToProps = (dispatch) => ({
  getTodoDeleteById: (id) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
