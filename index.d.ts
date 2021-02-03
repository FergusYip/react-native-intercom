interface IVisibility {
  GONE: 'GONE';
  VISIBLE: 'VISIBLE';
}

declare const Visibility: IVisibility;

type VisibilityType = IVisibility[keyof IVisibility];

interface INotifications {
  UNREAD_COUNT: 'UNREAD_CHANGE_NOTIFICATION';
  WINDOW_DID_SHOW: 'WINDOW_DID_SHOW';
  WINDOW_DID_HIDE: 'WINDOW_DID_HIDE';
}

declare const Notifications: INotifications;

type CustomAttributes = {
  [key: string]: string;
};

type CompanyAttributes = {
  company_id?: string;
  name?: string;
  created_at?: number;
  monthly_spend?: number;
  plan?: string;
  custom_attributes?: CustomAttributes;
};

type UserAttributes = {
  email?: string;
  user_id?: string;
  name?: string;
  phone?: string;
  language_override?: string;
  signed_up_at?: number;
  unsubscribed_from_emails?: boolean;
  companies?: Array<CompanyAttributes>;
  custom_attributes?: CustomAttributes;
};

declare class IntercomClient {
  /**
   * sendTokenToIntercom
   * @param token
   */
  sendTokenToIntercom(token: any): Promise<void>;

  /**
   * registerUnidentifiedUser
   * @returns {Promise<void>}
   */
  registerUnidentifiedUser(): Promise<void>;

  /**
   * updateUser
   * @param attributes User attributes
   * @returns {Promise<void>}
   */
  updateUser(attributes: UserAttributes): Promise<void>;

  /**
   * registerIdentifiedUser
   * @param {userId: string} | {email: string} options
   * @returns {Promise<void>}
   */
  registerIdentifiedUser(options: { userId: string } | { email: string }): Promise<void>;

  /**
   * logout
   * @returns {Promise<void>}
   */
  logout(): Promise<void>;

  /**
   * Log an event
   * @param {string} eventName
   * @param {[key: string]: string | number | boolean } metadata
   */
  logEvent(
    eventName: string,
    metadata: { [key: string]: string | number | boolean }
  ): Promise<void>;

  /**
   * handlePushMessage
   * @returns {Promise<void>}
   */
  handlePushMessage(): Promise<void>;

  /**
   * displayMessenger
   * @returns {Promise<void>}
   */
  displayMessenger(): Promise<void>;

  /**
   * hideMessenger
   * @returns {Promise<void>}
   */
  hideMessenger(): Promise<void>;

  /**
   * Show Message Composer
   */
  displayMessageComposer(): Promise<void>;

  /**
   * displayMessageComposerWithInitialMessage
   * @param {string} message
   * @returns {Promise<void>}
   */
  displayMessageComposerWithInitialMessage(message: string): Promise<void>;

  /**
   * displayConversationsList
   * @returns {Promise<void>}
   */
  displayConversationsList(): Promise<void>;

  /**
   * getUnreadConversationCount
   * @returns {Promise<void>}
   */
  getUnreadConversationCount(): Promise<number>;

  /**
   * displayHelpCenter
   * @returns {Promise<void>}
   */
  displayHelpCenter(): Promise<void>;

  /**
   * setLauncherVisibility
   * @param {string} visibility
   * @returns {Promise<void>}
   */
  setLauncherVisibility(visibility: VisibilityType): Promise<void>;

  /**
   * setLauncherVisibility
   * @param {string} visibility
   * @returns {Promise<void>}
   */
  setInAppMessageVisibility(visibility: VisibilityType): Promise<void>;

  /**
   * setupAPN
   * @param {string} deviceToken
   * @returns {Promise<void>}
   */
  setupAPN(deviceToken: string): Promise<void>;

  /**
   * setUserHash
   * @param {string} userHash
   * @returns {Promise<void>}
   */
  setUserHash(userHash: string): Promise<void>;

  /**
   * setBottomPadding
   * @param {number} padding
   * @returns {Promise<void>}
   */
  setBottomPadding(padding: number): Promise<void>;

  /**
   * addEventListener
   * @param {string} type
   * @param {() => void} handler
   */
  addEventListener(type: string, handler: (event?: any) => void): void;

  /**
   * removeEventListener
   * @param {string} type
   * @param {() => void} handler
   */
  removeEventListener(type: string, handler: (event?: any) => void): void;

  /**
   * To enable iOS push notifications, simply call the following anywhere in your code:
   */
  registerForPush(): Promise<void>;

  /**
   * displayCarousel
   * @param {string} carouselId
   * @returns {Promise<void>}
   */
  displayCarousel(carouselId: string): Promise<void>;

  /**
   * displayArticle
   * @param {string} articleId
   * @returns {Promise<void>}
   */
  displayArticle(articleId: string): Promise<void>;
}

declare const Intercom: IntercomClient;

export default Intercom;
export { Notifications, Visibility };
