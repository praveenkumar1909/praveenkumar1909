// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { CoreError } from '@classes/errors/error';

/**
 * Generic error returned by an Ajax call.
 */
export class CoreAjaxError extends CoreError {

    available = 1; // @deprecated since app 4.0. AJAX endpoint should always be available in supported Moodle versions.
    status?: number;

    constructor(message: string, available?: number, status?: number) {
        super(message);

        this.status = status;
    }

}
