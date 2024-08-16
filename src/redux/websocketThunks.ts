import { AppThunk } from '../store';
import { setTasks, setComplianceStatus, addRecentActivity } from '../slices/combinedDataSlice';
import { pusherSubscribe, pusherUnsubscribe } from '../../services/pusherService';

export const subscribeToWebSocket = (): AppThunk => (dispatch) => {
  pusherSubscribe('my-channel', 'task-updated', (data) => {
    dispatch(setTasks(data.tasks));
  });

  pusherSubscribe('my-channel', 'compliance-status-updated', (data) => {
    dispatch(setComplianceStatus(data.complianceStatus));
  });

  pusherSubscribe('my-channel', 'recent-activity', (data) => {
    dispatch(addRecentActivity(data.activity));
  });
};

export const unsubscribeFromWebSocket = (): AppThunk => () => {
  pusherUnsubscribe('my-channel', 'task-updated');
  pusherUnsubscribe('my-channel', 'compliance-status-updated');
  pusherUnsubscribe('my-channel', 'recent-activity');
};
