import { BeanRenderBase, Local } from 'zova';
import type { ControllerPageHome } from './controller.js';
import { QPage } from 'quasar';

export interface RenderPageHome extends ControllerPageHome {}

@Local()
export class RenderPageHome extends BeanRenderBase {
  render() {
    return (
      <QPage>
        <div class="text-center q-pa-md flex flex-center">
          <div>
            <div style="font-size: 5vh">Hello Zova</div>

            <div class="text-h5" style="opacity:.4">
              Less is more, while more is less
            </div>
          </div>
          <div
            style={{ width: '80%', height: '300px' }}
            ref={ref => {
              this.chartRef = ref as any;
            }}
          ></div>
        </div>
      </QPage>
    );
  }
}
