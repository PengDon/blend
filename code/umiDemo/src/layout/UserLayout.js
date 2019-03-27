import React, { Component, Fragment } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';
import Link from 'umi/link';
import DocumentTitle from 'react-document-title';
import styles from './UserLayout.less';


class UserLayout extends Component {
  componentDidMount() {
  }

  render() {
    const {
      children,
      location: { pathname },
      breadcrumbNameMap,
    } = this.props;
    return (
      <DocumentTitle title="login">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <span className={styles.title}>Login</span>
                </Link>
              </div>
              <div className={styles.desc}>登录</div>
            </div>
            {children}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default connect(() => ({}))(UserLayout);
