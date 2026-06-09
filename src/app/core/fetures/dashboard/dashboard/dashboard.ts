import { Component,inject } from '@angular/core';
import { TaskStore } from '../../../task.store';
import { Piechartcomponent } from '../../../../shared/piechartcomponent/piechartcomponent';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Piechartcomponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
 protected taskStore = inject(TaskStore);

 handleAddTask(inputElement: HTMLInputElement) {
    const title = inputElement.value.trim();
    if (title) {
      this.taskStore.addTask(title);
      inputElement.value = ''; // Clear the UI input
    }
  }
  handleToggle(id: number) {
    this.taskStore.toggleTask(id);
  }

  handleDelete(id: number) {
    this.taskStore.deleteTask(id);
  }

  handleFilterChange(newFilter: 'all' | 'pending' | 'completed') {
    this.taskStore.filter.set(newFilter);
  }
}
